import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter } from '@angular/router';
import { provideZoneChangeDetection } from '@angular/core';
import { routes } from './app/app.routes';


bootstrapApplication(App, {
  ...appConfig,
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }) // Zone-less config
  ]
})
  .catch((err) => console.error(err));
