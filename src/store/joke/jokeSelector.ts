import { RootState } from '../index';
import { JokeSelector } from './types';

export const jokeSelector = (state: RootState): JokeSelector => ({
  joke: state.dumbJokes?.joke,
  loading: state.dumbJokes?.loading,
});
