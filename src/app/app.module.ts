import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AstronaughtsComponent } from './astronaughts/astronaughts.component';
import { AstronaughtsPageComponent } from './astronaughts-page/astronaughts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AstronaughtsComponent,
    AstronaughtsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
