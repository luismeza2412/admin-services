import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './components/company/company.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    CompanyComponent,
    ArticleComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    
  ],
  exports: [
    ArticleComponent
  ],


})
export class FeaturesModule { }
