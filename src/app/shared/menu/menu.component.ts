import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from 'src/app/rickandmorty/services/rickandmorty.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  src:string=""
  constructor(private rs:RickandmortyService, private router:Router) { }

  ngOnInit(): void {
  }
search(event:any){
this.router.navigate(['/rickandmorty/buscador',event])
}
restaurar(){
  this.router.navigate(['/rickandmorty'])
}
}
