import { Component } from '@angular/core';
import { TodoItemService } from '../../../services/todo-item.service';
import { TodoItem } from '../../../models/todo-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
 
  constructor(private todoItemService: TodoItemService, private router: Router) {
   }

  onSubmit(): void {
    const { title, description } = this.form;
    const todoItem = {} as TodoItem;
    todoItem.title = title;
    todoItem.description = description;

    this.createTodoItem(todoItem);
  }

   
  public createTodoItem(todoItem: TodoItem): void {
    this.todoItemService.createTodoItem(todoItem).subscribe({
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
