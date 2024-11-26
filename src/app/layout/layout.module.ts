import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
})
export class LayoutModule { }
