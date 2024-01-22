import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'to-do';
  isLoggedIn = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
    }
  }

}
