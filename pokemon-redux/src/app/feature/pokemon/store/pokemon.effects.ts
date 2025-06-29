import { inject, Injectable  } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as PokemonActions from './pokemon.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { PokemonService } from '../services/pokemon.service';

@Injectable()
export class PokemonEffects {

    private actions$ = inject(Actions);
  private pokemonService = inject(PokemonService);
  
  //constructor(private actions$: Actions, private pokemonService: PokemonService){}

  loadPokemon$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokemonActions.loadPokemon),
      mergeMap(() =>
        this.pokemonService.getAll().pipe(
            tap((data) => {console.log("data ----> ", data)}),
          map((data) => PokemonActions.loadPokemonSuccess({ data })),
          catchError((error) => of(PokemonActions.loadPokemonFailure({ error })))
        )
      )
    )
    });

}
