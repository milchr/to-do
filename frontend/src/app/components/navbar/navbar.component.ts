
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
   ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService,private tokenStorageService: TokenStorageService) { }

  isLoggedIn = false;

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout(): void {
    console.log("logout");
    this.authService.logout(this.tokenStorageService.getUser()).subscribe({
      next: response => {
        console.log(response);
      },
      error: err => {
        // alert(err.message);
        console.log(err);
      }
    });
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}