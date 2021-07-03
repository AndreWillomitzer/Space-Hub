import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AstronaughtsComponent} from './astronaughts/astronaughts.component';
const routes: Routes = [
  {path: "astronaughts", component: AstronaughtsComponent}
  //{path: "/home", component: AstronaughtsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
