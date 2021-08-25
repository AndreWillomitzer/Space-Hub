import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronaughtsComponent } from './astronaughts/astronaughts.component';
import { AstronaughtsPageComponent } from './astronaughts-page/astronaughts-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
const routes: Routes = [
  { path: 'astronaughts', component: AstronaughtsComponent },
  {path: "search", component: SearchResultComponent}
  //{path: "/home", component: AstronaughtsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
