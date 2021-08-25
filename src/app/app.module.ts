import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AstronaughtsComponent } from './astronaughts/astronaughts.component';
import { AstronaughtsPageComponent } from './astronaughts-page/astronaughts-page.component';
import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';

import { SearchResultComponent } from './search-result/search-result.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AstronaughtsComponent,
    AstronaughtsPageComponent,
    SearchPipe,
    SearchResultComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
