import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemons, stopLoading } from '@store/pokemonsSlice';
import InfiniteScroll from 'react-infinite-scroller';
import { getPokemonsByPage } from '@utils/fetchUtils';
import PokemonsList from '@containers/PokemonsList';

import styles from './PokemonsPage.module.scss';

const PokemonsPage = () => {
  const dispatch = useDispatch();
  const { pokemons, page, loading } = useSelector(({ pokemonsState }) => pokemonsState);

  const fetchMoreData = async () => {
    if (pokemons.length >= 949) {
      dispatch(stopLoading());
      return;
    }

    const response = await getPokemonsByPage(page);
    dispatch(loadPokemons(response.data));
  };

  return (
    <>
      <InfiniteScroll
        className={styles.pokemonBox}
        initialLoad={false}
        loadMore={fetchMoreData}
        hasMore={loading}
        loader={<h4 key={0}>Loading...</h4>}
      >
        <PokemonsList pokemons={pokemons} />
      </InfiniteScroll>
    </>
  );
};

export default PokemonsPage;
