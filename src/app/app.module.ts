import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AstronaughtsComponent } from './astronaughts/astronaughts.component';
import { AstronaughtsPageComponent } from './astronaughts-page/astronaughts-page.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

import { SearchResultComponent } from './search-result/search-result.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroComponent } from './hero/hero.component';
import { LaunchTimerPageComponent } from './launch-timer-page/launch-timer-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AstronaughtsComponent,
    AstronaughtsPageComponent,
    SearchPipe,
    SearchResultComponent,
    ImageGalleryComponent,
    NavbarComponent,
    HomePageComponent,
    HeroComponent,
    LaunchTimerPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
