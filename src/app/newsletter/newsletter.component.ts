import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div class="container relative px-4 mx-auto">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
            
            <!-- Content Section -->
            <div class="w-full md:w-1/2 space-y-4 md:space-y-6">
              <h2 class="animate-fade-in-up text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                <span class="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Join Our 
                  <span class="relative whitespace-nowrap">
                    <span class="relative z-10 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                      Innovators
                    </span>
                    <svg class="absolute -bottom-1 md:-bottom-2 left-0 h-2 w-full opacity-70" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="url(#gradient)" stroke-width="3" fill="none" class="animate-draw-underline"/>
                    </svg>
                  </span>
                  <span class="block mt-1">Network</span>
                </span>
              </h2>
              <p class="animate-fade-in-up text-lg text-gray-600 [animation-delay:200ms] leading-relaxed">
                Stay ahead of the curve with exclusive insights, funding opportunities, and compliance updates delivered straight to your inbox.
              </p>
              <div class="animate-fade-in-up flex items-center space-x-3 [animation-delay:400ms]">
                <div class="flex -space-x-2">
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white font-bold text-xs">JS</div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-xs">KP</div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white font-bold text-xs">ML</div>
                  <div class="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs">+</div>
                </div>
                <span class="text-sm text-gray-600 font-medium">Join 5,000+ professionals</span>
              </div>
            </div>
            
            <!-- Form Section -->
            <div class="w-full md:w-1/2 animate-fade-in-up [animation-delay:600ms] mt-6 md:mt-0">
              <div class="relative p-5 md:p-6 overflow-hidden bg-white rounded-xl border border-gray-200 shadow-lg">
                <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-50 to-teal-50 rounded-full -mt-16 -mr-16 opacity-50"></div>
                
                <form 
                  (ngSubmit)="onSubmit()" 
                  class="relative space-y-4"
                  #newsletterForm="ngForm">
                  <h3 class="text-xl font-bold text-gray-800 mb-3">Get Started 🚀⚙️</h3>
                  
                  <div class="space-y-1">
                    <label for="email" class="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      class="w-full px-3 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out text-sm"
                      placeholder="janesmith@example.com"
                    />
                  </div>

                  <div class="flex items-start space-x-2 mt-3">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      [(ngModel)]="formData.consent"
                      required
                      class="w-4 h-4 mt-0.5 rounded border-gray-300 bg-white text-blue-500 focus:ring-blue-500"
                    />
                    <label for="consent" class="text-xs text-gray-600 leading-tight">
                      I agree to receive updates and accept the 
                      <a href="/privacy-policy" class="text-blue-600 hover:text-blue-700 font-medium underline">privacy policy</a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    [disabled]="!newsletterForm.form.valid || isSubmitting"
                    class="w-full py-3 px-4 text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg font-semibold text-sm transition duration-300 ease-in-out hover:shadow-md hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-white mt-3"
                  >
                    <span *ngIf="!isSubmitting">Join the Network</span>
                    <span *ngIf="isSubmitting" class="flex items-center justify-center">
                      <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  </button>
                </form>

                <div *ngIf="successMessage" class="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <p class="text-green-700 text-xs font-medium">{{ successMessage }}</p>
                </div>

                <div *ngIf="errorMessage" class="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p class="text-red-700 text-xs font-medium">{{ errorMessage }}</p>
                </div>
                
                <div class="flex items-center mt-4 pt-3 border-t border-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2 text-xs text-gray-500">Your information is securely encrypted</span>
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
            <stop offset="100%" style="stop-color: rgb(20, 184, 166)"/>
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
      50% { transform: translate(-16px, -16px); }
    }

    @keyframes float-medium {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(16px, -24px); }
    }

    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(16px);
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
      animation: fade-in-up 0.8s ease-out forwards;
      opacity: 0;
    }

    .animate-draw-underline {
      stroke-dasharray: 100%;
      animation: draw-underline 1.2s ease-out forwards;
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