import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';
import { TodoItemService } from '../../services/todo-item.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  public todoItems: TodoItem[];

  constructor(private todoItemService: TodoItemService) {
    this.todoItems = [];
   }

  ngOnInit(): void {
  }

  public getTodoItemsPagination(): void {

    this.todoItemService.getTodoItems().subscribe(
      response => {
        const { todoItems } = response;
        this.todoItems = todoItems;
      },
      error => {
       console.log(error);
      });
  }
}
