/// <reference types="@angular/localize" />

import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing-module';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch())
  ]
})
  .catch((err) => console.error(err));
