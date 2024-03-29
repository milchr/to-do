import { RouterModule, Routes } from '@angular/router';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { NewTodoItemComponent } from './components/todo-item/new-todo-item/new-todo-item.component';
import { AuthRegisterComponent } from './components/auth/auth-register/auth-register.component';
import { AuthLoginComponent } from './components/auth/auth-login/auth-login.component';
import { EditTodoItemComponent } from './components/todo-item/edit-todo-item/edit-todo-item.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', component: TodoItemComponent },
    { path: 'tasks', component: TodoItemComponent },
    { path: 'edit_task/:id', component: EditTodoItemComponent},
    { path: 'new_task', component: NewTodoItemComponent },
    { path: 'sign_up', component: AuthRegisterComponent },
    { path: 'sign_in', component: AuthLoginComponent}
    
];

@NgModule({
    imports: [RouterModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { } 