import { Component } from '@angular/core';
import { TodoItemService } from '../../../services/todo-item.service';
import { TodoItem } from '../../../models/todo-item';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TokenStorageService } from '../../../services/token-storage.service';
import { AuthUser } from '../../../models/auth-user';

@Component({
  selector: 'app-new-todo-item',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule 
  ],
  templateUrl: './new-todo-item.component.html',
  styleUrl: './new-todo-item.component.css'
})
export class NewTodoItemComponent {

  form: any = {
    title: null,
    description: null
  };
 
  constructor(private todoItemService: TodoItemService, private router: Router, private tokenStorageService: TokenStorageService) {
   }

  onSubmit(): void {
    const { title, description } = this.form;
    const todoItem = {} as TodoItem;
    todoItem.title = title;
    todoItem.description = description;

    this.createTodoItem(todoItem, this.tokenStorageService.getUser());
  }

   
  public createTodoItem(todoItem: TodoItem, user: AuthUser): void {
    this.todoItemService.createTodoItem(todoItem, user).subscribe({
      next: response => {
        const item: TodoItem = response;
        console.log(item);
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
