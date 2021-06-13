import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RickandmortyRoutingModule } from './rickandmorty-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';


@NgModule({
  declarations: [
    HomeComponent,
    EpisodiosComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    RickandmortyRoutingModule
  ]
})
export class RickandmortyModule { }
