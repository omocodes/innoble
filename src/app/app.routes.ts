import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

export const routes: Routes = [
  { 
    path: '',  // This is the root/default route
    component: HeroComponent  // Your existing hero component
  },
  { 
    path: 'resources',
    loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent)
  },
  { 
    path: 'solutions',
    loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent)
  },
  { 
    path: 'how-it-works',
    loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent)
  },
  { 
    path: '**',  // Wildcard route for 404
    redirectTo: ''
  }
];