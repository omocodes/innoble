import { Component, HostListener, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header
      class="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm"
      role="banner"
    >
      <div class="container relative flex h-16 items-center justify-between px-4">
        <!-- Logo -->
        <a
          class="flex items-center gap-2"
          routerLink="/"
          aria-label="Innoble Home"
        >
          <img src="https://www.innoble.co.za/assets/v2/images/Logo.png" alt="Innoble Logo" class="h-8" />
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
            class="inline-flex h-9 items-center justify-center rounded-full bg-blue-600 px-6 text-sm font-medium text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            routerLink="/register"
          >
            Register
          </a>
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
            routerLinkActive="bg-gray-100 text-blue-600"
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
              class="block rounded-lg bg-blue-600 px-3 py-2 text-base font-medium text-white transition-transform hover:scale-105"
              (click)="closeMobileMenu()"
            >
              Register
            </a>
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

  ngOnInit() {}

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
}
