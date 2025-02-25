import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { LucideAngularModule, ArrowRight, Shield, Zap, Building2, ChevronRight } from 'lucide-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(LucideAngularModule.pick({ ArrowRight, Shield, Zap, Building2, ChevronRight }))
  ]
}).catch(err => console.error(err));