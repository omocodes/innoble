import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <!-- Animated background patterns -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <!-- Animated circles -->
        <div class="animate-float-slow absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div class="animate-float-medium absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"></div>
        <div class="animate-float-fast absolute left-1/4 bottom-0 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"></div>

        <!-- Animated lines -->
        <div class="absolute inset-0">
          <svg class="h-full w-full opacity-30" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#gradient)" stroke-width="2" class="animate-draw-line">
              <animate attributeName="stroke-dashoffset" from="200%" to="0%" dur="3s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
      </div>

      <!-- Content -->
      <div class="container relative mx-auto flex min-h-[90vh] px-4">
        <div class="mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
          
          <!-- Main content -->
          <h1 class="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Automate Your 
            <span class="relative">
              <span class="relative z-10 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Business Compliance
              </span>
              <svg class="absolute -bottom-2 left-0 h-3 w-full opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="url(#gradient)" stroke-width="2" fill="none" class="animate-draw-underline"/>
              </svg>
            </span>
          </h1>

          <p class="animate-fade-in-up mb-12 max-w-2xl text-lg text-gray-600 [animation-delay:200ms] sm:text-xl">
            Register your business, get compliant, and access funding opportunities all in one platform. 
            Experience the future of business management.
          </p>

          <!-- CTA buttons -->
          <div class="animate-fade-in-up flex flex-col gap-4 [animation-delay:400ms] sm:flex-row">
            <a
              class="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-teal-600 px-8 text-base font-medium text-white transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              routerLink="/register"
            >
              Get Started
              <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              class="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white/80 px-8 text-base font-medium text-gray-800 backdrop-blur-sm transition-colors hover:border-gray-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              routerLink="/how-it-works"
            >
              How It Works
            </a>
          </div>

          <!-- Animated stats -->
          <div class="animate-fade-in-up mt-16 grid grid-cols-2 gap-8 [animation-delay:600ms] sm:grid-cols-3">
            <div class="text-center">
              <div class="mb-2 text-2xl font-bold text-gray-800">
                <span class="counter" [attr.data-target]="5000">3000</span>+
              </div>
              <div class="text-sm text-gray-600">Businesses Registered</div>
            </div>
            <div class="text-center">
              <div class="mb-2 text-2xl font-bold text-gray-800">
                <span class="counter" [attr.data-target]="99">95</span>%
              </div>
              <div class="text-sm text-gray-600">Compliance Rate</div>
            </div>
            <div class="text-center hidden sm:block">
              <div class="mb-2 text-2xl font-bold text-gray-800">
                <span class="counter" [attr.data-target]="24">1</span>h
              </div>
              <div class="text-sm text-gray-600">Compliance Verification</div>
            </div>
          </div>
        </div>
      </div>

      <!-- SVG Definitions -->
      <svg class="hidden">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color: rgb(37, 99, 235)"/>
            <stop offset="100%" style="stop-color: rgb(13, 148, 136)"/>
          </linearGradient>
        </defs>
      </svg>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }

    @keyframes float-slow {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-20px, -20px); }
    }

    @keyframes float-medium {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(20px, -30px); }
    }

    @keyframes float-fast {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(-15px, -15px); }
    }

    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes draw-line {
      from { stroke-dashoffset: 200%; }
      to { stroke-dashoffset: 0%; }
    }

    @keyframes draw-underline {
      from { stroke-dashoffset: 100%; }
      to { stroke-dashoffset: 0%; }
    }

    .animate-float-slow {
      animation: float-slow 7s ease-in-out infinite;
    }

    .animate-float-medium {
      animation: float-medium 5s ease-in-out infinite;
    }

    .animate-float-fast {
      animation: float-fast 4s ease-in-out infinite;
    }

    .animate-fade-in {
      animation: fade-in 1s ease-out forwards;
    }

    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
      opacity: 0;
    }

    .animate-draw-line {
      stroke-dasharray: 200%;
      animation: draw-line 3s linear infinite;
    }

    .animate-draw-underline {
      stroke-dasharray: 100%;
      animation: draw-underline 1.5s ease-out forwards;
    }
  `],
})
export class HeroComponent {
  ngOnInit() {
    this.initCounters();
  }

  private initCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000; // 2 seconds
      const start = 0;
      const increment = target / (duration / 16); // 60 FPS

      let current = start;
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      });

      observer.observe(counter);
    });
  }
}