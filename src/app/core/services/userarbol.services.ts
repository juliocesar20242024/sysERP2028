import { Injectable } from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {IUsarbolModel, UsarbolModel} from '../models/usarbol-model';
import { enviroment } from '../enviroments/enviroment';
import {USERS} from '../mocks/usarbol.mock';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserArbolService {
constructor(private http: HttpClient) {
}
  private userarbols : Subject<UsarbolModel[]> = new Subject();

  getUserArbol(user: string ): Observable<UsarbolModel[]>{
  user = "victomx";
    return this.http.get<UsarbolModel[]>(`${enviroment.apiUrl}/api/V1/GetUsuarioArbol/user`)
  }
}

