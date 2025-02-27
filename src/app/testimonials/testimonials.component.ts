import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-12 md:py-16 bg-white text-slate-600 overflow-hidden">
      <!-- Background patterns with adjusted positioning -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="animate-float-slow absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div class="animate-float-medium absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl"></div>
        <div class="animate-float-fast absolute left-1/2 bottom-0 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 relative">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <svg class="w-12 h-12 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Clients Say</h2>
          <p class="text-slate-500 max-w-2xl mx-auto text-sm md:text-base mb-6">
            Discover how we've helped businesses transform their operations and achieve their goals
          </p>
          <div class="absolute h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 left-1/2 transform -translate-x-1/2"></div>
        </div>

        <!-- Testimonials - Horizontal Scrolling -->
        <div class="overflow-hidden relative">
          <div class="animate-scroll-primary flex w-max gap-8 py-4">
            <ng-container *ngFor="let testimonial of testimonials">
              <div class="w-80 flex-shrink-0 p-5 bg-white rounded-md shadow-md border border-slate-100">
                <p class="text-sm italic text-slate-700 mb-3">"{{testimonial.content}}"</p>
                <h4 class="text-xs font-semibold text-slate-800">- {{testimonial.name}}</h4>
                <p class="text-xs text-slate-500">{{testimonial.title}}</p>
              </div>
            </ng-container>
            <!-- Duplicate testimonials for smoother looping -->
            <ng-container *ngFor="let testimonial of testimonials">
              <div class="w-80 flex-shrink-0 p-5 bg-white rounded-md shadow-md border border-slate-100">
                <p class="text-sm italic text-slate-700 mb-3">"{{testimonial.content}}"</p>
                <h4 class="text-xs font-semibold text-slate-800">- {{testimonial.name}}</h4>
                <p class="text-xs text-slate-500">{{testimonial.title}}</p>
              </div>
            </ng-container>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }

    .animate-float-medium {
      animation: float-medium 6s ease-in-out infinite;
    }

    .animate-float-fast {
      animation: float-fast 4s ease-in-out infinite;
    }

    @keyframes float-slow {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(0, -20px); }
    }

    @keyframes float-medium {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(0, -15px); }
    }

    @keyframes float-fast {
      0%, 100% { transform: translate(0, 0); }
      50% { transform: translate(0, -10px); }
    }

    /* Animation for Horizontal Scrolling */
    @keyframes scroll-primary {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); } /* Adjusted to -50% because we duplicated testimonials */
    }

    .animate-scroll-primary {
      animation: scroll-primary 60s linear infinite; /* Increased animation duration */
    }

    .animate-scroll-primary:hover {
      animation-play-state: paused;
    }

    :host {
      display: block;
      width: 100%;
    }

    .container {
      @apply mx-auto max-w-7xl;
    }
  `]
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'Moola Moe',
      title: 'Business Owner',
      content: 'Innoble provided a smooth and efficient loan experience. Quick application, fast disbursement, and user-friendly online portal.'
    },
    {
      name: 'Sir Bastians',
      title: 'Shuttle Services',
      content: 'Innoble was professional and easy to work with, ensuring document compliance and providing expert guidance.'
    },
    {
      name: 'Kemtan Snyders',
      title: 'Construction Company Owner',
      content: 'Innoble helped my construction company become fully compliant, explaining the entire process clearly and efficiently. Highly recommended.'
    },
    {
      name: 'Elmarie Klein',
      title: 'Kireni Logistics',
      content: 'Excellent process! Quick, simple, and easy. The team goes the extra mile to assist with paperwork. Timelines and rates were reasonable.'
    },
    {
      name: 'Lerato Nkosi',
      title: 'Retail Entrepreneur',
      content: 'I was impressed with Innoble\'s speed and efficiency. They helped me access funding quickly, which made a huge difference for my business.'
    },
    {
      name: 'Thabo Cele',
      title: 'Restaurant Owner',
      content: 'Innoble made compliance so easy! I can now focus on growing my business instead of worrying about paperwork. Great service!'
    },
    {
      name: 'Zinhle Dlamini',
      title: 'Marketing Consultant',
      content: 'The team at Innoble is fantastic. They really understand the needs of small businesses and provide tailored solutions that work.'
    },
    {
      name: 'Sipho Maseko',
      title: 'Tech Startup Founder',
      content: 'Innoble\'s compliance solutions are top-notch. They helped us navigate complex regulations with ease. I highly recommend them!'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
