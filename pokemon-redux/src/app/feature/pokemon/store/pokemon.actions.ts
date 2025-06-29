import { createAction, props } from '@ngrx/store';
import { Pokemon } from '../../../core/models/pokemon.model';

export const loadPokemon = createAction('[Pokemon] Load');
export const loadPokemonSuccess = createAction(
  '[Pokemon] Load Success',
  props<{ data: Pokemon[] }>()
);
export const loadPokemonFailure = createAction(
  '[Pokemon] Load Failure',
  props<{ error: any }>()
);
