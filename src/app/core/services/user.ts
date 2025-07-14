import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IUsarbolModel, UsarbolModel} from '../models/usarbol-model';
import {USERS} from '../mocks/usarbol.mock';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class User {

  constructor(httpClient: HttpClient) { }
  getUsersMock(): Observable<IUsarbolModel[]> {
    return of(USERS);
  }

  getUsers(): Observable<IUsarbolModel[]> {
    return of(USERS);
  }
}
