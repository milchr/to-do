import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../../../models/todo-item';
import { TodoItemService } from '../../../services/todo-item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-todo-item',
  standalone: true,
  imports: [ 
    CommonModule,
    FormsModule 
  ],
  templateUrl: './edit-todo-item.component.html',
  styleUrl: './edit-todo-item.component.css'
})
export class EditTodoItemComponent implements OnInit {
  id = '0';

  form: any = {
    title: null,
    description: null
  };
 
  constructor(private todoItemService: TodoItemService, private router: Router,  private activated: ActivatedRoute) {
  
   }
  
   ngOnInit(): void {
    this.id = this.activated.snapshot.paramMap.get('id') ?? '';
  }

  onSubmit(): void {
    const { title, description } = this.form;
    const todoItem = {} as TodoItem;
    todoItem.id = +this.id;
    todoItem.title = title;
    todoItem.description = description;
    console.log(todoItem);
    this.updateTodoItem(todoItem);
  }

   
  public updateTodoItem(todoItem: TodoItem): void {
    this.todoItemService.updateTodoItem(todoItem).subscribe({
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
