import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.class';

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  public getDataUser(): Observable<HttpResponse<User>> {
    return this.http.get<User>('/src/assets/data/user.json', { observe: 'response'});
  }
}
