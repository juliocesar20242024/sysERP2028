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


  getUserArbol(user: string ): Observable<UsarbolModel[]>{
    const body = {
      Email: 'victorm',
      Password: "123456789"
    };
  user = "victorm";
    return this.http.get<UsarbolModel[]>('http://localhost:5012/api/V1/GetUsuarioArbol',{
       params:  {
         email: "victorm",
         Password: "123"

       }
      });

/*
    return this.http.get<any>(`api/V1/GetUsuario`, {
      params: {
        email: email
      }
    });
    */


  }

}

