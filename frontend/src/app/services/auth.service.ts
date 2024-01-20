import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../env/env';
import { AuthUser } from '../models/auth-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public register(authUser: AuthUser): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.apiServerUrl}/auth/register`, authUser);
  }

  public authenticate(authUser: AuthUser): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${this.apiServerUrl}/auth/authenticate`, authUser);
  }

  public logout(authUser: AuthUser): Observable<AuthUser> {
    console.log("logout");
    console.log(authUser);
    return this.http.post<AuthUser>(`${this.apiServerUrl}/auth/logout`, authUser);
  }
}
