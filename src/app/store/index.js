import { combineReducers } from 'redux';

import pokemonsState from './pokemonsStateSlice';
import uiState from './uiStateSlice';

export default combineReducers({
  pokemonsState,
  uiState,
});
