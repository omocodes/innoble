import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="relative py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <!-- Animated background patterns -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Grid pattern -->
        <div class="absolute inset-0 opacity-10">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="newsletter-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#newsletter-grid)" />
          </svg>
        </div>

        <!-- Animated circles -->
        <div class="animate-float-slow absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div class="animate-float-medium absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl"></div>
      </div>

      <div class="container relative px-4 mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-12">
            
            <!-- Content Section -->
            <div class="w-full md:w-1/2 space-y-6">
              <h2 class="animate-fade-in-up text-3xl md:text-4xl font-bold tracking-tight">
                <span class="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Join Our 
                  <span class="relative">
                    <span class="relative z-10 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                      Innovators
                    </span>
                    <svg class="absolute -bottom-2 left-0 h-3 w-full opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="url(#gradient)" stroke-width="2" fill="none" class="animate-draw-underline"/>
                    </svg>
                  </span>
                  Network
                </span>
              </h2>
              <p class="animate-fade-in-up text-lg text-gray-600 [animation-delay:200ms]">
                Stay ahead of the curve with exclusive insights, funding opportunities, and compliance updates.
              </p>
              <div class="animate-fade-in-up flex items-center space-x-4 [animation-delay:400ms]">
                <div class="flex -space-x-2">
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-teal-500"></div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-teal-500"></div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-teal-500"></div>
                </div>
                <span class="text-sm text-gray-500">Join 5,000+ professionals</span>
              </div>
            </div>
            
            <!-- Form Section -->
            <div class="w-full md:w-1/2 animate-fade-in-up [animation-delay:600ms]">
              <div class="relative p-8 overflow-hidden backdrop-blur-sm bg-white/70 rounded-2xl border border-gray-200 shadow-lg">
                <div class="absolute top-0 right-0 w-20 h-20 bg-blue-200/40 rounded-bl-full blur-xl"></div>
                <div class="absolute bottom-0 left-0 w-16 h-16 bg-teal-200/40 rounded-tr-full blur-xl"></div>
                
                <form 
                  (ngSubmit)="onSubmit()" 
                  class="relative space-y-4"
                  #newsletterForm="ngForm">
                  <div class="space-y-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      class="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div class="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      [(ngModel)]="formData.consent"
                      required
                      class="w-4 h-4 rounded border-gray-300 bg-white text-blue-500 focus:ring-blue-500"
                    />
                    <label for="consent" class="text-sm text-gray-600">
                      I agree to receive updates and accept the 
                      <a href="/privacy-policy" class="text-blue-600 hover:text-blue-700">privacy policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    [disabled]="!newsletterForm.form.valid || isSubmitting"
                    class="w-full py-3 px-6 text-white bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg font-medium transition duration-150 ease-in-out hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white"
                  >
                    <span *ngIf="!isSubmitting">Join the Network</span>
                    <span *ngIf="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  </button>
                </form>

                <div *ngIf="successMessage" class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg backdrop-blur-sm">
                  <p class="text-green-700 text-sm">{{ successMessage }}</p>
                </div>

                <div *ngIf="errorMessage" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg backdrop-blur-sm">
                  <p class="text-red-700 text-sm">{{ errorMessage }}</p>
                </div>
              </div>
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

    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
      opacity: 0;
    }

    .animate-draw-underline {
      stroke-dasharray: 100%;
      animation: draw-underline 1.5s ease-out forwards;
    }

    input:focus {
      outline: none;
    }
  `]
})
export class NewsletterComponent {
  formData = {
    email: '',
    consent: false
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.successMessage = 'Welcome to the Innovators Network! Check your email for confirmation.';
      this.formData = {
        email: '',
        consent: false
      };
    } catch (error) {
      this.errorMessage = 'Oops! Something went wrong. Please try again later.';
    } finally {
      this.isSubmitting = false;
    }
  }
}