import { combineReducers } from 'redux';
import pokemonsReducer from './pokemonsSlice';
import uiStateReducer from './uiStateSlice';

export default combineReducers({
  pokemonsState: pokemonsReducer,
  uiState: uiStateReducer,
});
