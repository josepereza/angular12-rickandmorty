import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',children:[
    {
      path:'', redirectTo:'home'
    },
    {path:'home', component: HomeComponent},
    {path:'episodios', component:EpisodiosComponent},
    {path:'buscador/:nombre', component:BuscadorComponent},
    {path:'**', redirectTo:'home'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RickandmortyRoutingModule { }
