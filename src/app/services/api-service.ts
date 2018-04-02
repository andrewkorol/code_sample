import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url);
  }

  public update<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(url, body);
  }
}
