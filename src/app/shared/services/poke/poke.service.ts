import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResolveFn, ActivatedRouteSnapshot } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { pokemon } from '../../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private _httpClient : HttpClient) { }

  getPikachu() {
    return this._httpClient.get<pokemon>("https://pokeapi.co/api/v2/pokemon/pikachu").pipe(map((poke)=> {

        return {
          ...poke,
          height: poke.height * 10,
          weight: poke.weight / 10
        }
      }),
      tap(poke => console.log(poke)
      ))
  }

  getPokemonById(id:string | null) : Observable<pokemon>{
    return this._httpClient.get<pokemon>("https://pokeapi.co/api/v2/pokemon/" + id)
  }
}



  export const PokeResolver: ResolveFn<pokemon> =
  (route: ActivatedRouteSnapshot) => {
    console.log(route.paramMap.get('id'))
    return inject(PokeService).getPokemonById(route.paramMap.get('id'));
}



