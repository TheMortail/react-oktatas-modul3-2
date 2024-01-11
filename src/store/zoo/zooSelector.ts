import { RootState } from '../index';

export const selectAnimals = (state: RootState) => state.zoo.animals;
