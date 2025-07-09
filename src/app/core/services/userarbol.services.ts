import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {IUsarbolModel, UsarbolModel} from '../models/usarbol-model';
import {USERS} from '../mocks/usarbol.mock';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserArbolService {

  private userarbols : Subject<UsarbolModel[]> = new Subject();

  getUserArbol(): Observable<UsarbolModel[]> {
    fetch('/api/products')
      .then((response: HttpResponse<IUsarbolModel[]>) => {})

    return this.userarbols.asObservable();
  }
}
