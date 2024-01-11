import { combineReducers } from 'redux';
import { ZooReducer } from './zoo/zooSlice';
import { JokeReducer } from './joke/jokeSlice';

const rootReducer = combineReducers({
  zoo: ZooReducer,
  dumbJokes: JokeReducer,
});

export default rootReducer;
