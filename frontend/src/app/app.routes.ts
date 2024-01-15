import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'tasks', component: TodoItemComponent },
];
