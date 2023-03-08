import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent {

  id! : number;

  selectedArticle!: article | undefined;

  articleForm! : FormGroup;

  constructor(private _articleService: ArticleService, private _activatedRoute : ActivatedRoute, private _router : Router, private _formBuilder : FormBuilder) {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.selectedArticle = this._articleService.getById(this.id);


    this.articleForm =  this._formBuilder.group({
      name: [this.selectedArticle?.name, [Validators.required, Validators.min(0)]],
      category : [this.selectedArticle?.category, [Validators.required]],
      price: [this.selectedArticle?.price, [Validators.required]],
      creationDate : [this.selectedArticle?.creationDate],
      description : [this.selectedArticle?.description,[Validators.required]],
      note : [this.selectedArticle?.note]
    }

    )
  }


  submit(){

    let values = this.articleForm.value;

    let newArticle : article = {
      id: this.id,
      name: values.name,
      category: values.category,
      price: values.price,
      creationDate: values.creationDate,
      description: values.description,
      note: values.note
    }

   this._articleService.update(newArticle)

   this._router.navigate(['/exo/all']);

  }

}


