import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { mappingFetchPokemons, limit } from '@utils/fetchUtils';
import { addPokemons, stopPagination } from '@store/pokemonsStateSlice';
import { loc } from '@utils/languageUtils';

import PokemonsList from '@containers/PokemonsList';
import AnimationLoader from '@components/AnimationLoader';
import ToolsComponent from '@components/ToolsComponent';
import NetworkErrorPage from '@pages/NetworkErrorPage';

import styles from './PokemonsPage.module.scss';

const PokemonsPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [matches, setMatches] = useState(true);
  const noMatchesMessage = loc('notFoundSearch');

  const {
    pokemons, sortedBy, nextPage, isPagination, searchText, typing,
  } = useSelector(({ pokemonsState }) => pokemonsState);

  useEffect(() => {
    if (pokemons.length === 0 && !typing && searchText !== '') {
      setMatches(false);
    } else {
      setMatches(true);
    }
  }, [pokemons]);

  const fetchMoreData = async () => {
    if (isPagination && !typing && matches) {
      try {
        const { data } = await mappingFetchPokemons[sortedBy](nextPage, searchText);

        if (data.length < limit) {
          dispatch(stopPagination());
        }

        dispatch(addPokemons(data));
      } catch (e) {
        setError(e);
      }
    }
  };

  if (error) {
    return (<NetworkErrorPage />);
  }

  return (
    <>
      <ToolsComponent />
      <div className={styles.feedback}>
        {matches ? null : noMatchesMessage}
      </div>
      <InfiniteScroll
        className={styles.pokemonBox}
        initialLoad
        loadMore={fetchMoreData}
        hasMore={isPagination}
        loader={<div className={styles.loading} key={0}><AnimationLoader /></div>}
      >
        <PokemonsList pokemons={pokemons} />
      </InfiniteScroll>
    </>
  );
};

export default PokemonsPage;
