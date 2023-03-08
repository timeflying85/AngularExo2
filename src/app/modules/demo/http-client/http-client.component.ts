import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pokemon } from 'src/app/shared/models/pokemon';
import { PokeService } from 'src/app/shared/services/poke/poke.service';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit{

  errorMessage! : string ;

  monPokemon : pokemon | any;


  constructor(private _pokeService : PokeService, private _activatedRoute : ActivatedRoute){}


  ngOnInit(): void {
    let data = this._activatedRoute.snapshot.data['pikachu']
    if (data.error) {
      console.log(data);

      this.errorMessage = data.error.statusText
    }
    else{
      this.monPokemon = data
    }

    /*this._pokeService.getPikachu().subscribe({
      next : (data) => {

        this.monPokemon = data

        console.log(this.monPokemon);


      },
      error : (err) => {
        switch(err.status){

          case 0 : this.errorMessage = 'Dude aim for the server please'
            break;
          case 404 : this.errorMessage = 'Pokemon Not Found'
            break;

        }

        console.log(err);

      },

    })*/

  }



}
