import {ActivatedRoute, ActivatedRouteSnapshot, Params} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class ActivatedRouteStub implements ActivatedRoute {
  /** An observable of the matrix parameters scoped to this route */
  public subjectParams: BehaviorSubject<Params> = new BehaviorSubject(this.testParams);
  public params: Observable<Params> = this.subjectParams.asObservable();
  /** An observable of the query parameters shared by all the routes */
  public subjectQueryParams: BehaviorSubject<Params> = new BehaviorSubject(this.testQueryParams);
  public queryParams: Observable<Params> = this.subjectQueryParams.asObservable();
  /** An observable of the URL fragment shared by all the routes */
  public subjectFragment: BehaviorSubject<string> = new BehaviorSubject(this.testFragment);
  public fragment: Observable<string> = this.subjectFragment.asObservable();
  public url: Observable<any[]>;
  public data: any;
  public outlet: any;
  public component: any;
  public routeConfig: any;
  public root: any;
  public parent: any;
  public firstChild: any;
  public children: any;
  public pathFromRoot: any;
  public paramMap: any;
  public queryParamMap: any;

  private _testParams: Params;
  private _testQueryParams: Params;
  private _testFragment: string;

  constructor() {
    this.children = this.generateSnapshot();
  }

  /**
   * Getters and Setters for params
   */
  public get testParams(): Params {
    return this._testParams;
  }

  public set testParams(params: Params) {
    this._testParams = params;
    this.children = this.generateSnapshot();
    this.subjectParams.next(params);
  }

  /**
   * Getters and Setters for query params
   */
  public get testQueryParams(): Params {
    return this._testQueryParams;
  }

  public set testQueryParams(params: Params) {
    this._testQueryParams = params;
    this.children = this.generateSnapshot();
    this.subjectQueryParams.next(params);
  }

  /**
   * Getters and Setters for fragment
   */
  public get testFragment(): string {
    return this._testFragment;
  }

  public set testFragment(fragment: string) {
    this._testFragment = fragment;
    this.children = this.generateSnapshot();
    this.subjectFragment.next(fragment);
  }

  public get snapshot(): ActivatedRouteSnapshot {
    return this.generateSnapshot();
  }

  private generateSnapshot(): ActivatedRouteSnapshot {
    return <ActivatedRouteSnapshot>{
      params: this.testParams,
      queryParams: this.testQueryParams,
      fragment: this.testFragment,
      url: null,
      data: null,
      outlet: null,
      component: null,
      routeConfig: null,
      root: null,
      parent: null,
      firstChild: null,
      children: null,
      pathFromRoot: null,
      paramMap: null,
      queryParamMap: null
    };
  }
}
