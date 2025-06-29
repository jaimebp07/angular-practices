import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { EffectsModule, provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { pokemonReducer } from './feature/pokemon/store/pokemon.reducer';
import { PokemonEffects } from './feature/pokemon/store/pokemon.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ pokemon: pokemonReducer }),
    provideEffects(PokemonEffects),
    provideStoreDevtools(),
    provideHttpClient()
  ]
};
