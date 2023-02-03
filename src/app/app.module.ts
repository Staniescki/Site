
import { NgModule } from '@angular/core';

// @ts-ignore
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ProfessoraComponent } from './components/professora/professora.component';
import {AppRoutingModule} from "./app.routing.module";
import { FooterPageComponent } from "./components/footer/footer-page.component"
import {RouterModule} from '@angular/router'

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProfessoraComponent,
    FooterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
