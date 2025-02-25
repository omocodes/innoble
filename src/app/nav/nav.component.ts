import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header
      class="sticky top-0 z-50 w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 border-b border-gray-200 shadow-sm"
      role="banner"
    >
      <!-- Animated background patterns -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-5">
          <svg
            class="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="black"
                  stroke-width="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div class="container relative flex h-16 items-center justify-between px-4">
        <!-- Logo -->
        <a
          class="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-xl font-bold text-transparent transition-colors hover:from-blue-500 hover:to-teal-500"
          routerLink="/"
          aria-label="Innoble Home"
        >
          INNOBLE
        </a>

        <!-- Desktop Navigation -->
        <nav
          class="hidden gap-6 md:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.path"
            routerLinkActive="text-blue-600"
            [routerLinkActiveOptions]="{ exact: item.exact }"
            class="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            [attr.aria-label]="item.ariaLabel"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Desktop Auth Buttons -->
        <div class="hidden items-center gap-4 md:flex">
          <a
            class="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
            routerLink="/login"
            routerLinkActive="text-blue-600"
          >
            Login
          </a>
          <a
            class="inline-flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-6 text-sm font-medium text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            routerLink="/register"
          >
            Register
          </a>
          <!-- Light/Dark Mode Toggle (Desktop) -->
          <button
            (click)="toggleTheme()"
            class="rounded-full p-2 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-colors"
            aria-label="Toggle Light/Dark Mode"
          >
            <svg
              *ngIf="isDarkMode"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            <svg
              *ngIf="!isDarkMode"
              class="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.939a1 1 0 01.53-.082l.3.092a1 1 0 01-.093 1.253l-.3.092a1 1 0 01-.932-.253l-.092-.3a1 1 0 01.253-.53zm-8.48 1.414a1 1 0 01.532.082l.3-.092a1 1 0 01-.093 1.253l-.3.092a1 1 0 01-.932-.253l-.092-.3a1 1 0 01.253-.532zM4 10a1 1 0 011-1H5a1 1 0 010 2H5a1 1 0 01-1-1zm5-6a1 1 0 00-1 1v1a1 1 0 002 0V5a1 1 0 00-1-1zm5 6a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zM3.093 8.127a1 1 0 01-.092-.3l.092-.3a1 1 0 011.253.093l.3.092a1 1 0 01-.253.932l-.3.092a1 1 0 01-.53-.253zM8 3.093a1 1 0 01-.092-.3l.092-.3a1 1 0 011.253.093l.3.092a1 1 0 01-.253.932l-.3.092a1 1 0 01-.53-.253zM10 3a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1z"
                clip-rule="evenodd"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
          [attr.aria-expanded]="isMobileMenuOpen"
          aria-controls="mobile-menu"
          (click)="toggleMobileMenu()"
        >
          <span class="sr-only">{{
            isMobileMenuOpen ? 'Close menu' : 'Open menu'
          }}</span>
          <svg
            class="h-6 w-6"
            [class.hidden]="isMobileMenuOpen"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            class="h-6 w-6"
            [class.hidden]="!isMobileMenuOpen"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="md:hidden"
        [class.hidden]="!isMobileMenuOpen"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div class="space-y-1 px-4 pb-3 pt-2">
          <a
            *ngFor="let item of navItems"
            [routerLink]="item.path"
            routerLinkActive="bg-gradient-to-r from-blue-600 to-teal-600 text-white"
            [routerLinkActiveOptions]="{ exact: item.exact }"
            class="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
            (click)="closeMobileMenu()"
          >
            {{ item.label }}
          </a>
          <div class="mt-4 space-y-2">
            <a
              routerLink="/login"
              class="block rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900"
              (click)="closeMobileMenu()"
            >
              Login
            </a>
            <a
              routerLink="/register"
              class="block rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 px-3 py-2 text-base font-medium text-white transition-transform hover:scale-105"
              (click)="closeMobileMenu()"
            >
              Register
            </a>
            <!-- Light/Dark Mode Toggle (Mobile) -->
            <button
              (click)="toggleTheme(); closeMobileMenu()"
              class="flex w-full items-center rounded-lg px-3 py-2 text-base font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 justify-start"
              aria-label="Toggle Light/Dark Mode"
            >
              <svg
                *ngIf="isDarkMode"
                class="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
              <svg
                *ngIf="!isDarkMode"
                class="mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.939a1 1 0 01.53-.082l.3.092a1 1 0 01-.093 1.253l-.3.092a1 1 0 01-.932-.253l-.092-.3a1 1 0 01.253-.53zm-8.48 1.414a1 1 0 01.532.082l.3-.092a1 1 0 01-.093 1.253l-.3.092a1 1 0 01-.932-.253l-.092-.3a1 1 0 01.253-.532zM4 10a1 1 0 011-1H5a1 1 0 010 2H5a1 1 0 01-1-1zm5-6a1 1 0 00-1 1v1a1 1 0 002 0V5a1 1 0 00-1-1zm5 6a1 1 0 011-1h1a1 1 0 010 2h-1a1 1 0 01-1-1zM3.093 8.127a1 1 0 01-.092-.3l.092-.3a1 1 0 011.253.093l.3.092a1 1 0 01-.253.932l-.3.092a1 1 0 01-.53-.253zM8 3.093a1 1 0 01-.092-.3l.092-.3a1 1 0 011.253.093l.3.092a1 1 0 01-.253.932l-.3.092a1 1 0 01-.53-.253zM10 3a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <span>Toggle Dark Mode</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .container {
        @apply mx-auto max-w-7xl;
      }
    `,
  ],
})
export class NavComponent implements OnInit {
  isMobileMenuOpen = false;
  isDarkMode = false; // Default to light mode
  navItems = [
    {
      path: '/resources',
      label: 'Resources',
      ariaLabel: 'View resources',
      exact: false,
    },
    {
      path: '/solutions',
      label: 'Solutions',
      ariaLabel: 'Browse solutions',
      exact: false,
    },
    {
      path: '/contact',
      label: 'Contact Us',
      ariaLabel: 'Contact us',
      exact: false,
    },
  ];

  ngOnInit() {
    // Check local storage for theme preference on init
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth >= 768 && this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.enableDarkMode();
    } else {
      this.enableLightMode();
    }
  }

  enableDarkMode() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    this.isDarkMode = true;
  }

  enableLightMode() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    this.isDarkMode = false;
  }
}
