import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './components/company/company.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    CompanyComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
