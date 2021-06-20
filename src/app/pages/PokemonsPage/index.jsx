import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';
import { mappingFetchPokemons, limit } from '@utils/fetchUtils';
import { addPokemons, stopPagination } from '@store/pokemonsStateSlice';

import PokemonsList from '@containers/PokemonsList';
import AnimationLoader from '@components/AnimationLoader';
import ToolsComponent from '@components/ToolsComponent';

import styles from './PokemonsPage.module.scss';

const PokemonsPage = () => {
  const dispatch = useDispatch();

  const {
    pokemons, sortedBy, nextPage, isPagination, searchText, typing,
  } = useSelector(({ pokemonsState }) => pokemonsState);

  const fetchMoreData = async () => {
    if (isPagination && !typing) {
      try {
        const { data } = await mappingFetchPokemons[sortedBy](nextPage, searchText);

        if (data.length < limit) {
          dispatch(stopPagination());
        }

        dispatch(addPokemons(data));
      } catch (e) {
        console.log('Loading list of pokemons', e);
      }
    }
  };

  return (
    <>
      <ToolsComponent />
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
