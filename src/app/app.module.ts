import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule, routingComponents } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BioComponent } from './bio/bio.component';
import { ServiceComponent } from './service/service.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    routingComponents,
    BioComponent,
    ServiceComponent,
  ],
  // entryComponents: [HomeComponent],
  imports: [
   AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
     MdButtonModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
