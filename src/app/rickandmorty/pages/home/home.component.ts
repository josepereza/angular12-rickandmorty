import { Component, OnInit } from '@angular/core';
import { RickandmortyService } from '../../services/rickandmorty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
characters:any[]=[]
  constructor(private rs:RickandmortyService) { }

  ngOnInit(): void {
this.rs.getAllCharacters().subscribe((data:any)=>{
  this.characters=data.results
  console.log(this.characters)
})
  }

}
