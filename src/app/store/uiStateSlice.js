import { createSlice } from '@reduxjs/toolkit'; /* eslint no-param-reassign: 0 */
import { setDefaultTheme } from '@utils/themeUtils';

export const uiStateSlice = createSlice({
  name: 'uiStateSlice',
  initialState: {
    theme: setDefaultTheme(),
  },
  reducers: {
    changeTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { changeTheme } = uiStateSlice.actions;

export default uiStateSlice.reducer;
