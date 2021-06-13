import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {
episodios:any[]=[]
  constructor(private rs:RickandmortyService) { }

  ngOnInit(): void {
this.rs.getAllEpisodios().subscribe((data:any)=>{
  this.episodios=data.results;
  console.log(this.episodios)
})
  }

}
