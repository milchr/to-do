import { Component } from '@angular/core';
import { AuthUser } from '../../../models/auth-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { TokenStorageService } from '../../../services/token-storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule 
  ],
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css'
})
export class AuthLoginComponent {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;
    const user = {} as AuthUser;
    user.username = username;
    user.password = password;
    console.log(user);
    this.login(user);
  }

  login(authUser: AuthUser){
    this.authService.authenticate(authUser).subscribe({
      next: response => {
        const user: AuthUser = response;
        this.tokenStorage.saveToken(user.token);
        this.tokenStorage.saveUser(user);
        this.isLoggedIn = true;
        this.form = null;
        this.reloadPage();

      },
      error: err => {
        alert(err.message);
        this.form = null;
      }
    });
    this.router.navigate(['/tasks']);
  }

  reloadPage(): void {
    window.location.reload();
  }

}
