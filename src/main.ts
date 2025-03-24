import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { importProvidersFrom } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      ModalModule.forRoot(),
      CarouselModule.forRoot(),
      CollapseModule.forRoot())
  ]
}).catch(err => console.error(err));
