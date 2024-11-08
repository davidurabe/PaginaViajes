import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders, routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';


const appProviders = { 
  providers: [ provideHttpClient(),
     provideRouter(routes) ]};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
