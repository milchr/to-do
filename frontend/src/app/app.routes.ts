import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { NewTodoItemComponent } from './components/todo-item/new-todo-item/new-todo-item.component';
import { AuthRegisterComponent } from './components/auth/auth-register/auth-register.component';
import { AuthLoginComponent } from './components/auth/auth-login/auth-login.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: TodoItemComponent },
    { path: 'new_task', component: NewTodoItemComponent },
    { path: 'sign_up', component: AuthRegisterComponent },
    { path: 'sign_in', component: AuthLoginComponent}
    
];
