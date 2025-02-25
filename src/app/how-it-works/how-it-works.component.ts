import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  template: `
    <section class="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
      <!-- Grid pattern background -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="grid-how-it-works" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-how-it-works)" />
          </svg>
        </div>

        <!-- Animated floating elements -->
        <div class="animate-float-slow absolute -right-32 top-0 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div class="animate-float-medium absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"></div>
      </div>

      <div class="container relative mx-auto px-4">
        <!-- Section header -->
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="animate-fade-in-up mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p class="animate-fade-in-up mb-16 text-lg text-gray-600 [animation-delay:200ms]">
            Three simple steps to achieve compliance and grow your business
          </p>
        </div>

        <!-- Steps grid -->
        <div class="grid gap-8 md:grid-cols-3">
          <!-- Step 1 -->
          <div class="animate-fade-in-up group relative rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-white [animation-delay:300ms]">
            <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 blur transition duration-300 group-hover:opacity-100"></div>
            <div class="relative">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-900">Register & Create Profile</h3>
              <p class="mb-4 text-gray-600">Create your account and tell us about your business. We'll guide you through setting up your compliance profile.</p>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-center">
                  <svg class="mr-2 h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Quick 5-minute setup
                </li>
                <li class="flex items-center">
                  <svg class="mr-2 h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Secure data encryption
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="animate-fade-in-up group relative rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-white [animation-delay:400ms]">
            <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 blur transition duration-300 group-hover:opacity-100"></div>
            <div class="relative">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-900">Set Your Goals</h3>
              <p class="mb-4 text-gray-600">Tell us your business objectives and compliance needs. We'll create a personalized roadmap.</p>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-center">
                  <svg class="mr-2 h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  AI-powered recommendations
                </li>
                <li class="flex items-center">
                  <svg class="mr-2 h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Custom compliance timeline
                </li>
              </ul>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="animate-fade-in-up group relative rounded-2xl border border-gray-200 bg-white/80 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-blue-200 hover:bg-white [animation-delay:500ms]">
            <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 opacity-0 blur transition duration-300 group-hover:opacity-100"></div>
            <div class="relative">
              <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3 3m0 0l-3-3m3 3V8"/>
                </svg>
              </div>
              <h3 class="mb-3 text-xl font-semibold text-gray-900">Upload & Automate</h3>
              <p class="mb-4 text-gray-600">Upload your documents and let our AI-powered system handle the compliance process.</p>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-center">
                  <svg class="mr-2 h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Automated document processing
                </li>
                <li class="flex items-center">
                  <svg class="mr-2 h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Real-time progress tracking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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

    .animate-float-slow {
      animation: float-slow 7s ease-in-out infinite;
    }

    .animate-float-medium {
      animation: float-medium 5s ease-in-out infinite;
    }

    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
      opacity: 0;
    }
  `]
})
export class HowItWorksComponent {}