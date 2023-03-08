import { Injectable } from '@angular/core';
import { animal } from '../../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {


  animals : animal[] = [
    {
      id : 1,
      name : 'Wëena',
      birthdate : new Date("08/16/2015"),
      race : 'Bichon Havanais',
      coat : 'Deep Blue',
      owner : 'Gigi'
    },
    {
      id : 2,
      name : 'Bibiche',
      birthdate : new Date("05/22/2019"),
      race : 'Fox Terrier',
      coat : 'Black & Withe',
      owner : 'Cleopatre'
    },
    {
      id : 3,
      name : 'Chatoune',
      birthdate : new Date("02/01/2017"),
      race : 'Doberman',
      coat : 'Brown & Black',
      owner : 'Marco'
    },
    {
      id : 4,
      name : 'Sushi',
      birthdate : new Date("11/15/2018"),
      race : 'Persian',
      coat : 'Light Grey',
      owner : 'Charlotte'
    },
    {
      id : 5,
      name : 'Goyza',
      birthdate : new Date("10/30/2020"),
      race : 'Birman',
      coat : 'Withe & Brown',
      owner : 'Julie'
    },
  ]

  constructor() { }
}
