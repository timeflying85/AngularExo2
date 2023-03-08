import { Injectable } from '@angular/core';
import { article } from '../../models/article';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  articles : article[] = [
    {
      id: 1,
      name : 'SmartTv',
      category : 'Multimedia',
      price : 650,
      creationDate : new Date("01/02/2021"),
      description : 'A Tv to do what u want before u say it',
      note : 5
    },
    {
      id: 2,
      name : 'Boiler',
      category : 'Kitchen',
      price : 49,
      creationDate : new Date("05/22/2022"),
      description : 'Best boiler for a perfect kitchen',
      note : 3
    },
    {
      id: 3,
      name : 'Gap Shirt',
      category : 'Clothes',
      price : 23,
      creationDate : new Date("07/18/2022"),
      description : 'Fashion is your best friend',
      note : 4
    },
    {
      id: 4,
      name : 'WashMachine',
      category : 'Multimedia',
      price : 780,
      creationDate : new Date("01/01/2023"),
      description : '',
      note : 2
    },

  ]

  cpt! : number;

  constructor() {

    this.cpt = this.articles.length + 1

  }

  getById(id: number): article | undefined {
    return this.articles.find(a => a.id == id);
  }

  getAll() : article[]{
    return this.articles
  }

  delete(id: number): void {
    const index = this.articles.findIndex(a => a.id == id);
    this.articles.splice(index, 1);
  }


  update(article: article): void {
    const index = this.articles.findIndex(a => a.id == article.id);
    this.articles[index] = article;
  }

  createArticle(newArticle: article): void {
    newArticle.id = this.cpt
    this.cpt++
    this.articles.push(newArticle);
  }

}
