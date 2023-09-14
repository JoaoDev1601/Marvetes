import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ShowComponent } from './show/show.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent},
  { path: "movie-list", component: MovieListComponent},
  { path: "show-list", component: ShowListComponent},
  { path: "movie/:type/:titulo", component: MovieComponent},
  { path: "show/:type/:titulo", component: ShowComponent},
  { path: "episode/:type/:titulo", component: EpisodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
