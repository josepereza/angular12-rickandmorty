import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(private http:HttpClient ) { }

  getAllCharacters(){
    return this.http.get('https://rickandmortyapi.com/api/character')
  }
  getAllEpisodios(){
    return this.http.get('https://rickandmortyapi.com/api/episode')
  }
  getCharacters(nombre:any){
    console.log('servicio', nombre)
    return this.http.get(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
  }
}


