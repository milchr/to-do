import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { TodoItemService } from '../../services/todo-item.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthUser } from '../../models/auth-user';

@Component({
  selector: 'app-todo-item', 
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  public todoItems: TodoItem[];
  isLoggedIn = false;

  constructor(private todoItemService: TodoItemService, private tokenStorageService: TokenStorageService) {
    this.todoItems = [];
    this.isLoggedIn = !!this.tokenStorageService.getToken();
   }

  ngOnInit(): void {
    this.getTodoItemsPagination(this.tokenStorageService.getUser());
  }

  onDelete(id: Number): void {
    this.deleteTodoItem(id, this.tokenStorageService.getUser());
  }

  public getTodoItemsPagination(user: AuthUser): void {
    this.todoItemService.getTodoItems(user).subscribe({
      next: response => {
        const { content } = response;
        this.todoItems = content;
      },
      error: err => console.error('Observable emitted an error: ' + err),
    })
  }

  public deleteTodoItem(id: Number, user: AuthUser): void {
    this.todoItemService.deleteTodoItem(id, user).subscribe({
      next: response => {
        window.location.reload();
      },
      error: err => console.error('Observable emitted an error: ' + err),
    })
  }
}
