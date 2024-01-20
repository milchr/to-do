import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoItemService } from './services/todo-item.service';
import { NewTodoItemComponent } from './components/todo-item/new-todo-item/new-todo-item.component';
import { AuthRegisterComponent } from './components/auth/auth-register/auth-register.component';
import { AuthLoginComponent } from './components/auth/auth-login/auth-login.component';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NewTodoItemComponent,
        TodoItemComponent,
        NavbarComponent,
        AuthRegisterComponent,
        AuthLoginComponent
      ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        MatCardModule
      ],
    providers: [
        TodoItemService,
        AuthService
      ],
    bootstrap: [AppComponent]
})
export class AppModule { }