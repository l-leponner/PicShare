import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { PicShareComponent } from './pic-share/pic-share.component';
import { PicShareListComponent } from './pic-share-list/pic-share-list.component';
import { HeaderComponent } from './header/header.component';
import {AppRoutingModule} from "./app-routing.module";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SinglePicShareComponent } from './single-pic-share/single-pic-share.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewPicShareComponent } from './new-pic-share/new-pic-share.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PicShareComponent,
    PicShareListComponent,
    HeaderComponent,
    LandingPageComponent,
    SinglePicShareComponent,
    NewPicShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
