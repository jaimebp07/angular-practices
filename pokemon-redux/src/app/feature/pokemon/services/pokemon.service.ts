import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../../../core/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  constructor(private http: HttpClient) {
    console.log("----------------> SERVICIO ")
  }

  getAll(): Observable<Pokemon[]> {
    console.log("----------------> PETICION ")
    return this.http.get<Pokemon[]>('https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json');
  }
}
