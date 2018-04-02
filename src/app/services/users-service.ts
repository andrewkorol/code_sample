import {Injectable} from '@angular/core';
import {ApiService} from './api-service';
import {Observable} from 'rxjs/Observable';

import {User} from '../models';

@Injectable()
export class UsersService {
  private usersUrl = 'http://jsonplaceholder.typicode.com/users';

  constructor(private apiService: ApiService) { }

  public getUsersList(): Observable<User[]> {
    return this.apiService.get<User[]>(this.usersUrl);
  }

  public getUser(id: number): Observable<User> {
    return this.apiService.get<User>(this.usersUrl + '/' + id);
  }

  public updateUser(id: number, body): Observable<User> {
    return this.apiService.update<User>(this.usersUrl + '/' + id, body);
  }
}
