import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {UsersRoutes} from './users.routes';
import {UserEditComponent} from './user-edit/user-edit-cmp';
import {UsersListComponent} from './users-list/users-list.cmp';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(UsersRoutes)
  ],
  declarations: [
    UserEditComponent,
    UsersListComponent,
  ],
  exports: [
    RouterModule,
  ]
})
export class UsersModule {}
