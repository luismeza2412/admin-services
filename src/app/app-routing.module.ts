import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';
import { CompanyComponent } from './features/components/company/company.component';
import { ArticleComponent } from './features/components/article/article.component';
import { HomeComponent } from './features/components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, data: { breadcrumb: 'Inicio' },
    children: [
      { path: '', component: HomeComponent },
      { path: 'company', component: CompanyComponent, data: { breadcrumb: 'Empresa' } },
      { path: 'article', component: ArticleComponent, data: { breadcrumb: 'Artículo' } },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
