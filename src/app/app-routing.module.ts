import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronaughtsComponent } from './astronaughts/astronaughts.component';
import { AstronaughtsPageComponent } from './astronaughts-page/astronaughts-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
const routes: Routes = [
  { path: 'astronaughts', component: AstronaughtsComponent },
  {path: "search", component: SearchResultComponent},
  {path: "gallery", component: ImageGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
