import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {UsersModule} from './pages/users/users.module';
import {AppComponent} from './app.component';
import {ProjectsComponent} from './pages/projects/projects-cmp';
import {ApiService, UsersService} from './services';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsersModule,
  ],
  providers: [
    ApiService,
    UsersService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
