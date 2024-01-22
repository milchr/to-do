import { Injectable,  Inject, PLATFORM_ID  } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthUser } from '../models/auth-user';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
     window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
      window.sessionStorage.removeItem(USER_KEY);
      window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): AuthUser {
    const userKey = window.sessionStorage.getItem(USER_KEY);
    console.log(userKey);
    if (userKey) {
        const obj = JSON.parse(userKey);
        const user = {} as AuthUser;
        user.username = obj.username;
        user.token = obj.token;

        return user;
    }
    
    return {} as AuthUser;
  }
}