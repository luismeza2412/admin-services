import { Component } from '@angular/core';
import { Article } from 'src/app/core/models/article.model';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  articulos: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticulos().subscribe((data) => {
      this.articulos = data;
    });
  }
}
