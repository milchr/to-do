import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { NewTodoItemComponent } from './components/todo-item/new-todo-item/new-todo-item.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: TodoItemComponent },
    { path: 'new_task', component: NewTodoItemComponent },
];
