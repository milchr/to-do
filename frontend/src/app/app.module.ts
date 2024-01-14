import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent
      ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
      ],
    providers: [
      ],
    bootstrap: [AppComponent]
})
export class AppModule { }