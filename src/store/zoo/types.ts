import { PayloadAction } from '@reduxjs/toolkit';

export type AddNewAnimalAction = PayloadAction<{ name: string }>;
export type DeleteAnimalAction = PayloadAction<{ id: number }>;

export type ZooState = {
  animals: { id: number; name: string }[];
};
