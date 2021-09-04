import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstronaughtsComponent } from './astronaughts/astronaughts.component';
import { LaunchTimerPageComponent } from './launch-timer-page/launch-timer-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ArticlesComponent } from './articles/articles.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'astronaughts', component: AstronaughtsComponent },
  { path: 'search', component: SearchResultComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'launch', component: LaunchTimerPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
