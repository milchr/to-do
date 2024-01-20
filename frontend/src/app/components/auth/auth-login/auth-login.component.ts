import { Component } from '@angular/core';
import { AuthUser } from '../../../models/auth-user';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
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

  constructor(private authService: AuthService, private router: Router) {
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
        this.form = null;
        this.router.navigate(['/tasks']);
      },
      error: err => {
        alert(err.message);
        this.form = null;
      }
    });
  }

}
