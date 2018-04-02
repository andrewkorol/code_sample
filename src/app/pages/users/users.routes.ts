import {Route} from '@angular/router';

import {UsersListComponent} from './users-list/users-list.cmp';
import {UserEditComponent} from './user-edit/user-edit-cmp';

export const UsersRoutes: Route[] = [
  { path: '', component: UsersListComponent },
  { path: 'user/:id', component: UserEditComponent },
];
