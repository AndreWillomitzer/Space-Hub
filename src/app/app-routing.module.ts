import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronaughtsPageComponent } from './astronaughts-page/astronaughts-page.component';
const routes: Routes = [
  { path: 'astronaughts', component: AstronaughtsPageComponent },
  //{path: "/home", component: AstronaughtsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
