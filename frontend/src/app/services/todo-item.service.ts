import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../env/env';
import { TodoItem } from '../models/todo-item';

@Injectable(
  {
  providedIn: 'root'
}
)
export class TodoItemService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTodoItem(todoItemId: number): Observable<TodoItem>{
    return this.http.get<TodoItem>(`${this.apiServerUrl}/api/todoItem/${todoItemId}`);
  }

  public getTodoItems():  Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/todoItem`);
  }

  public createTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(`${this.apiServerUrl}/api/todoItem`, todoItem);
  }

  public updateTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    console.log("updateTodoItem");
    return this.http.patch<TodoItem>(`${this.apiServerUrl}/api/todoItem/${todoItem.id}`, todoItem);
  }

  public deleteTodoItem(id: Number): Observable<TodoItem> {
    return this.http.delete<any>(`${this.apiServerUrl}/api/todoItem/${id}`);
  }
}
