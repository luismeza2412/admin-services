import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeaturesModule } from './features/features.module';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
   FeaturesModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
