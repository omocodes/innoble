import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div class="container flex h-16 items-center justify-between">
        <a class="flex items-center gap-2 text-xl font-bold text-teal-500" routerLink="/">
          INNOBLE
        </a>
        <nav class="hidden gap-6 md:flex">
          <a class="text-sm font-medium hover:text-teal-500" routerLink="/services">Services</a>
          <a class="text-sm font-medium hover:text-teal-500" routerLink="/about">About Us</a>
          <a class="text-sm font-medium hover:text-teal-500" routerLink="/partners">Partners</a>
        </nav>
        <div class="flex items-center gap-4">
          <button class="hidden md:flex px-4 py-2 rounded-md hover:bg-gray-100">Sign In</button>
          <button class="px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-600">Get Started</button>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent {}