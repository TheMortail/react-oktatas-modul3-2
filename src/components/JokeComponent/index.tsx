import { FC, useEffect } from 'react';
import { jokeSelector } from '../../store/joke/jokeSelector';
import { getJokeThunk } from '../../store/joke/jokeThunk';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useSelector } from 'react-redux';

const JokeComponent: FC = () => {
  const { joke, loading } = useSelector(jokeSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJoke = () => {
    dispatch(getJokeThunk());
  };

  if (loading) {
    return <h1>Asking the internet for a joke...</h1>;
  }

  return (
    <div>
      {joke.setup}
      <br />
      {joke.punchline}
      <br />
      <br />
      <button onClick={() => getJoke()}>
        That was horrible. Give me another!
      </button>
    </div>
  );
};

export default JokeComponent;
