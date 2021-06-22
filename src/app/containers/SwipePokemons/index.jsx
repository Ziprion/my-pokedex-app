import React from 'react';

import { getNextId, getPreviousId } from '@utils/pokemonUtils';

import SwipeButton from '@components/SwipeButton';

const SwipePokemons = ({ id }) => (
  <>
    <SwipeButton id={getPreviousId(id)} target="previous" />
    <SwipeButton id={getNextId(id)} target="next" />
  </>
);

export default SwipePokemons;
