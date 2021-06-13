import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickandmortyModule } from './rickandmorty/rickandmorty.module';

const routes: Routes = [
  {path:'rickandmorty', loadChildren:()=>import('./rickandmorty/rickandmorty.module')
  .then(m=>m.RickandmortyModule)
},
{
  path:'**', redirectTo:'rickandmorty'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
