import { Coffee } from './coffee';
import { createReducer } from "@ngrx/store";

export const initialState: ReadonlyArray<Coffee> = [];

export const coffeeReducer = createReducer(
    initialState
);