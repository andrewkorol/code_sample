import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/empty';

import {User} from '../../models/index';

export class UsersServiceMock {
  public getUsersList(): Observable<User[]> {
    return Observable.empty();
  }

  public getUser(id: number): Observable<User> {
    return Observable.empty();
  }

  public updateUser(id: number, body): Observable<User> {
    return Observable.empty();
  }
}
