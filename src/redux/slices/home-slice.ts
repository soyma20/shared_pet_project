import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface IState {
  text: string;
}

const initialState: IState = { text: '' };

const example = createAsyncThunk<string, void>('homeSlice/example', () => {
  let exampleText = 'i am working)';

  return exampleText;
});

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(example.fulfilled, (state, action) => {
      state.text = action.payload;
    });
  },
});

const { reducer: homeReducer } = homeSlice;

const homeActions = {
  example,
};

export { homeReducer, homeActions };
