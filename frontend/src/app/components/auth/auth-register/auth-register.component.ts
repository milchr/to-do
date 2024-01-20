import { Component } from '@angular/core';
import { AuthUser } from '../../../models/auth-user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule 
  ],
  templateUrl: './auth-register.component.html',
  styleUrl: './auth-register.component.css'
})
export class AuthRegisterComponent {

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
    this.registerUser(user);
  }

  registerUser(authUser: AuthUser){
    this.authService.register(authUser).subscribe({
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
