import { Component } from '@angular/core';
import { AuthUser } from '../../models/auth-user';
import { AuthRegisterService } from '../../services/auth-register.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(private authRegisterService: AuthRegisterService, private router: Router) {
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
    this.authRegisterService.register(authUser).subscribe({
      next: response => {
        const item: AuthUser = response;
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
