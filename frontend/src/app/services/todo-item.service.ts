import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../env/env';
import { TodoItem } from '../models/todo-item';
import { AuthUser } from '../models/auth-user';

const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' } )



// const httpOptions = {
//   headers: new HttpHeaders(
//     { 'Content-Type': 'application/json' },
//   )
// };

const TOKEN_HEADER_KEY = 'Authorization';
const BEARER = 'Bearer ';

@Injectable(
  {
  providedIn: 'root'
}
)
export class TodoItemService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getTodoItem(todoItemId: number, user: AuthUser): Observable<TodoItem>{
    return this.http.get<TodoItem>(`${this.apiServerUrl}/api/todoItem/${todoItemId}`, { headers: ({'Authorization': `Bearer ${user.token}`}) });
  }

  public getTodoItems(user: AuthUser):  Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/api/todoItem`, { headers: ({'Authorization': `Bearer ${user.token}`}) });
  }

  public createTodoItem(todoItem: TodoItem, user: AuthUser): Observable<TodoItem> {
    
    return this.http.post<TodoItem>(`${this.apiServerUrl}/api/todoItem`, todoItem, { headers: ({'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`}) });
  }

  public updateTodoItem(todoItem: TodoItem, user: AuthUser): Observable<TodoItem> {
    console.log("updateTodoItem");
    return this.http.patch<TodoItem>(`${this.apiServerUrl}/api/todoItem/${todoItem.id}`, todoItem, { headers: ({'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}`}) });
  }

  public deleteTodoItem(id: Number, user: AuthUser): Observable<TodoItem> {
    return this.http.delete<any>(`${this.apiServerUrl}/api/todoItem/${id}`, { headers: ({'Authorization': `Bearer ${user.token}`}) });
  }
}
