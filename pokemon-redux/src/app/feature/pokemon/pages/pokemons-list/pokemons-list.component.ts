import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../../store/pokemon.actions';
import { PokemonCardComponent } from '../../components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokemons-list',
  standalone: true,
  imports: [PokemonCardComponent],
  templateUrl: './pokemons-list.component.html',
  styleUrl: './pokemons-list.component.scss'
})
export class PokemonsListComponent implements OnInit {

  constructor(private store: Store){}

  ngOnInit(): void {
    this.store.dispatch(PokemonActions.loadPokemon());
  }


}
