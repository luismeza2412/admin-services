import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../core/models/article.model'; 

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private jsonUrl = 'assets/json/articulos.json';

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<Article[]> {
    return this.http.get<Article[]>(this.jsonUrl);
  }
}
