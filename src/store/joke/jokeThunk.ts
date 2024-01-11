import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { Joke } from './types';

const api = axios.create({
  baseURL: 'https://official-joke-api.appspot.com',
});
export const getJokeThunk = createAsyncThunk<
  { joke: Joke },
  void,
  { rejectValue: string }
>('joke/getJoke', async (_args, thunkAPI) => {
  try {
    const response = await api.get<void, AxiosResponse<Joke>>('/random_joke');
    return { joke: response.data };
  } catch (e: unknown) {
    const error = e as AxiosError;
    return thunkAPI.rejectWithValue(error?.message || '');
  }
});
