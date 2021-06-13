import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap,map,filter,finalize,tap,debounceTime,distinctUntilChanged } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { RickandmortyService } from '../../services/rickandmorty.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  listado!:any

  constructor(private router:Router, private activateRouter:ActivatedRoute,private rs:RickandmortyService) { }

  ngOnInit(): void {
  //   this.listado=this.activateRouter.paramMap.pipe(switchMap((params: ParamMap) =>this.rs.getCharacters(params.get('nombre'))
   
  //   ),map((data:any)=>data.results)
  //  )


  this.activateRouter.params
   .pipe(
     switchMap(({nombre}) => this.rs.getCharacters(nombre).pipe(catchError(error=>{
      this.router.navigate(['/rickandmorty']) 
      return error}))       )
     )
   .subscribe((data:any)=>{this.listado=data.results
    
  })
  }

}
