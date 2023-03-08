import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  newArticle! : article;

  createForm! : FormGroup;


  constructor(private _articleService: ArticleService, private _formBuilder : FormBuilder, private _router : Router) {

  this.createForm = this._formBuilder.group({
    name: ['', [Validators.required]],
    category : ['', [Validators.required]],
    price: [0, [Validators.required, Validators.min(0)]],
    creationDate : [''],
    description : ['',[Validators.required]],
    note : [5,[Validators.required, Validators.min(0), Validators.max(5)]]
  })

}


  createArticle(): void {

    this._articleService.createArticle(this.createForm.value);
    this._router.navigate(['/exo/all'])
  }

}
