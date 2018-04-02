import {Observable} from 'rxjs/Observable';

export class ApiServiceMock {
  public get<T>(path: string): Observable<T> {
    return Observable.empty();
  }

  public update<T>(url: string, body: any): Observable<T> {
    return Observable.empty();
  }
}
