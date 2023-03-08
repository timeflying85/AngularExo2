import { Component } from '@angular/core';
import { article } from 'src/app/shared/models/article';
import { ArticleService } from 'src/app/shared/services/article/article.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  articles: article[];

  constructor(private _articleService: ArticleService) {
    this.articles = _articleService.articles;
  }

  deleteArticle(article: article): void {
    this._articleService.delete(article.id);
  }

}
