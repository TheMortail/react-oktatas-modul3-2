export type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

export type JokeState = {
  joke: Joke;
  loading: boolean;
  errorMessage?: string;
};

export type JokeSelector = {
  joke: Joke;
  loading: boolean;
};
