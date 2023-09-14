import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { ShowComponent } from './show/show.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MovieComponent,
    ShowComponent,
    MovieListComponent,
    ShowListComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
