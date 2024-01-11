import { AddNewAnimalAction, DeleteAnimalAction, ZooState } from './types';
import { createSlice } from '@reduxjs/toolkit';

export const initialState: ZooState = {
  animals: [
    { id: 1, name: 'kiskutya' },
    { id: 2, name: 'kismacska' },
    { id: 3, name: 'mosomedve' },
  ],
};

const zooSlice = createSlice({
  name: 'zoo',
  initialState,
  reducers: {
    addNewAnimal: (state, action: AddNewAnimalAction) => {
      state.animals.push({
        id: state.animals.length + 1,
        name: action.payload.name,
      });
    },

    deleteAnimal: (state, action: DeleteAnimalAction) => {
      state.animals = state.animals.filter(
        (animal) => animal.id !== action.payload.id,
      );
    },
  },
});

export const { addNewAnimal, deleteAnimal } = zooSlice.actions;
export const ZooReducer = zooSlice.reducer;
