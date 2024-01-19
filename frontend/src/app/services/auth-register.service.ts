import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../env/env';
import { AuthUser } from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public register(authUser: AuthUser): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.apiServerUrl}/auth/register`, authUser);
  }
}
