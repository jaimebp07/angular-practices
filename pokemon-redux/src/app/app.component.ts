import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonsListComponent } from './feature/pokemon/pages/pokemons-list/pokemons-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokemon-redux';
}
