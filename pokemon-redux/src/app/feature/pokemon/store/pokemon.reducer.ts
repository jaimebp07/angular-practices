import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';
import { Pokemon } from '../../../core/models/pokemon.model';

export interface PokemonState {
  data: Pokemon[];
  loading: boolean;
  error: any;
}

export const initialState: PokemonState = {
  data: [],
  loading: false,
  error: null
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.loadPokemon, (state) => ({ ...state, loading: true })),
  on(PokemonActions.loadPokemonSuccess, (state, { data }) => ({
    ...state,
    loading: false,
    data
  })),
  on(PokemonActions.loadPokemonFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
