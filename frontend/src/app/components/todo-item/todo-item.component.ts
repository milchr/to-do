import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { TodoItemService } from '../../services/todo-item.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item', 
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  public todoItems: TodoItem[];

  constructor(private todoItemService: TodoItemService) {
    this.todoItems = [];
   }

  ngOnInit(): void {
    this.getTodoItemsPagination();
  }

  public getTodoItemsPagination(): void {
    this.todoItemService.getTodoItems().subscribe({
      next: response => {
        const { content } = response;
        this.todoItems = content;
      },
      error: err => console.error('Observable emitted an error: ' + err),
    })
  }
}
