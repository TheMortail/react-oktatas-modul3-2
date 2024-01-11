import { JokeState } from './types';
import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { getJokeThunk } from './jokeThunk';

export const initialState: JokeState = {
  joke: {
    type: '',
    setup: '',
    punchline: '',
    id: 0,
  },
  loading: false,
  errorMessage: '',
};

const jokeSlice = createSlice({
  name: 'joke',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<JokeState>) => {
    builder.addCase(getJokeThunk.pending, (state) => {
      state.loading = true;
      state.errorMessage = '';
    });

    builder.addCase(getJokeThunk.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.payload;
    });

    builder.addCase(getJokeThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.joke = action.payload?.joke;
    });
  },
});

export const JokeReducer = jokeSlice.reducer;
