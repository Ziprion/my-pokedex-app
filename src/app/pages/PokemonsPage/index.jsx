import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadPokemons, stopLoading } from '@store/pokemonsSlice';
import InfiniteScroll from 'react-infinite-scroller';
import { getPokemonsByPage } from '@utils/fetchUtils';
import PokemonsList from '@containers/PokemonsList';
import AnimationLoader from '@components/AnimationLoader';

import styles from './PokemonsPage.module.scss';

const PokemonsPage = ({ justCatched = false }) => {
  if (justCatched) {
    return (
      <div className={styles.pokemonBox}>
        <PokemonsList justCatched />
      </div>
    );
  }

  const dispatch = useDispatch();
  const { pokemons, page, loading } = useSelector(({ pokemonsState }) => pokemonsState);

  const fetchMoreData = async () => {
    if (pokemons.length >= 1949) {
      dispatch(stopLoading());
      return;
    }

    const { data } = await getPokemonsByPage(page);
    dispatch(loadPokemons(data));
  };

  return (
    <InfiniteScroll
      className={styles.pokemonBox}
      initialLoad={false}
      loadMore={fetchMoreData}
      hasMore={loading}
      loader={<AnimationLoader />}
    >
      <PokemonsList />
    </InfiniteScroll>
  );
};

export default PokemonsPage;
