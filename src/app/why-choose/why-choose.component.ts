import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    LucideAngularModule,
    ArrowRight,
} from 'lucide-angular';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
    selector: 'app-why-choose',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    template: `
    <section class="relative py-12 bg-gray-50 overflow-hidden">
        <!-- Floating Gradient Orbs -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="orb-1"></div>
            <div class="orb-2"></div>
            <div class="orb-3"></div>
        </div>

        <!-- Content Container -->
        <div class="container mx-auto px-4 relative z-10">
            <!-- Header Section -->
            <div class="flex flex-col items-center mb-8">
                <div class="glowing-badge mb-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur border border-gray-200">
                    <span class="text-xs font-medium bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
                        Trusted by 10,000+ businesses
                    </span>
                </div>

                <h2 class="text-3xl md:text-4xl font-bold text-center mb-3 leading-tight">
                    Why businesses choose
                    <span class="relative">
                        <span class="absolute -inset-1 rounded-lg bg-gradient-to-r from-rose-500/20 to-orange-500/20 blur"></span>
                        <span class="relative text-gray-900">our platform</span>
                    </span>
                </h2>
            </div>

            <!-- Features Grid -->
            <div class="features-container" [@staggerAnimation]="features.length">
                <div *ngFor="let feature of features; let i = index" class="feature-item" [class.active]="activeFeature === i" (mouseenter)="setActiveFeature(i)" (mouseleave)="clearActiveFeature()">

                    <!-- Feature Content -->
                    <div class="feature-content" [ngClass]="feature.gradientClass">
                        <!-- Icon -->
                        <div class="feature-icon" [ngClass]="feature.iconBgClass">
                            <img [src]="feature.iconUrl" alt="Feature Icon" class="w-8 h-8">
                        </div>

                        <!-- Text Content -->
                        <div class="feature-text">
                            <h3 class="text-lg font-bold mb-1 text-gray-900">{{ feature.title }}</h3>
                            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
                        </div>

                        <!-- Interactive Elements -->
                        <div class="feature-interaction">
                            <div class="progress-bar" [style.width.%]="activeFeature === i ? 100 : 0"></div>
                            <span [ngClass]="feature.linkColor" class="learn-more">
                                Learn more
                                <i-lucide name="arrow-right" class="w-3 h-3 ml-1"></i-lucide>
                            </span>
                        </div>
                    </div>

                    <!-- Feature Visual -->
                    <div class="feature-visual" [ngStyle]="{'--delay': i * 0.1 + 's'}" [class.active]="activeFeature === i">
                        <div class="visual-element" [ngClass]="feature.visualClass"></div>
                    </div>
                </div>
            </div>

            <!-- Stats Section -->
            <div class="stats-grid mt-8">
                <div *ngFor="let stat of stats" class="stat-item">
                    <div class="stat-value" [ngClass]="stat.color">{{ stat.value }}</div>
                    <div class="stat-label">{{ stat.label }}</div>
                </div>
            </div>
        </div>
    </section>
    `,
    styles: [`
    :host {
      display: block;
    }

    /* Floating Orbs */
    .orb-1, .orb-2, .orb-3 {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.5;
      animation: float 20s infinite;
    }

    .orb-1 {
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(225, 29, 72, 0.2) 0%, rgba(225, 29, 72, 0) 70%);
      top: -50px;
      right: -50px;
      animation-delay: -5s;
    }

    .orb-2 {
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0) 70%);
      bottom: -100px;
      left: -100px;
      animation-delay: -10s;
    }

    .orb-3 {
      width: 150px;
      height: 150px;
      background: radial-gradient(circle, rgba(234, 179, 8, 0.2) 0%, rgba(234, 179, 8, 0) 70%);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation-delay: -15s;
    }

    @keyframes float {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(10px, 10px); }
      50% { transform: translate(-10px, 10px); }
      75% { transform: translate(-10px, -10px); }
    }

    /* Features Grid */
    .features-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjusted minmax */
      gap: 1rem; /* Adjusted gap */
      position: relative;
    }

    .feature-item {
      position: relative;
      transition: all 0.3s ease;
    }

    .feature-content {
      position: relative;
      padding: 1rem; /* Adjusted padding */
      background: white;
      border-radius: 20px; /* Adjusted border-radius */
      border: 1px solid rgba(0,0,0,0.1);
      transition: all 0.3s ease;
      overflow: hidden;
    }

    .feature-item.active .feature-content {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0,0,0,0.1); /* Adjusted shadow */
    }

    .feature-icon {
      width: 40px; /* Adjusted width */
      height: 40px; /* Adjusted height */
      border-radius: 10px; /* Adjusted border-radius */
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 0.75rem; /* Adjusted margin */
      position: relative;
      transition: all 0.3s ease;
    }

    .feature-item.active .feature-icon {
      transform: scale(1.1);
    }

    .feature-text {
      position: relative;
      z-index: 1;
    }

    .feature-interaction {
      margin-top: 0.75rem; /* Adjusted margin */
      position: relative;
    }

    .progress-bar {
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background: linear-gradient(to right, #e11d48, #f97316);
      transition: width 0.3s ease;
    }

    .learn-more {
      display: flex;
      align-items: center;
      font-size: 0.7rem; /* Adjusted font size */
      font-weight: 500;
      opacity: 0;
      transform: translateY(10px);
      transition: all 0.3s ease;
    }

    .feature-item.active .learn-more {
      opacity: 1;
      transform: translateY(0);
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Adjusted minmax */
      gap: 0.75rem; /* Adjusted gap */
      text-align: center;
    }

    .stat-value {
      font-size: 1.25rem; /* Adjusted font size */
      font-weight: 700;
      margin-bottom: 0.25rem;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

    .stat-label {
      color: #6b7280;
      font-size: 0.6rem; /* Adjusted font size */
    }

    /* Larger screens */
    @media (min-width: 1024px) {
        .features-container {
            grid-template-columns: repeat(3, minmax(250px, 1fr)); /* Adjusted minmax */
        }
        .stats-grid {
            grid-template-columns: repeat(4, minmax(120px, 1fr)); /* Adjusted minmax */
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .features-container {
        grid-template-columns: 1fr;
      }
        .stat-value {
        font-size: 1rem; /* Adjusted font size */
      }
    }
  `],
    animations: [
        trigger('staggerAnimation', [
            transition('* => *', [
                query(':enter', [
                    style({ opacity: 0, transform: 'translateY(20px)' }),
                    stagger(100, [
                        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
                    ])
                ], { optional: true })
            ])
        ])
    ]
})
export class WhyChooseComponent {
    activeFeature: number | null = null;

    features = [
        {
            title: 'Affordable Rates',
            description: 'Get and stay compliant with competitive pricing designed for small businesses.',
            iconUrl: 'https://cdn1.iconfinder.com/data/icons/hands-up-down/100/Sustainability-512.png',
            iconBgClass: 'bg-rose-50',
            iconColor: 'text-rose-500',
            gradientClass: 'from-rose-500/5 to-orange-500/5',
            linkColor: 'text-rose-500',
            visualClass: 'bg-gradient-to-br from-rose-500 to-orange-500'
        },
        {
            title: 'Quick Turnaround',
            description: 'Ditch the paper for faster processing with our automated compliance system.',
            iconUrl: 'https://cdn0.iconfinder.com/data/icons/business-glyphs-vol-2-1/52/file__resume__cv__exchange__transfer__change__move-512.png', 
            iconBgClass: 'bg-yellow-50',
            iconColor: 'text-yellow-500',
            gradientClass: 'from-yellow-500/5 to-green-500/5',
            linkColor: 'text-yellow-500',
            visualClass: 'bg-gradient-to-br from-yellow-500 to-green-500'
        },
        {
            title: 'Funding Opportunities',
            description: 'Access exclusive funding opportunities once you\'re fully compliant.',
            iconUrl: 'https://cdn2.iconfinder.com/data/icons/thin-business-1/24/thin-1089_deal_money_business-2-512.png',
            iconBgClass: 'bg-green-50',
            iconColor: 'text-green-500',
            gradientClass: 'from-green-500/5 to-blue-500/5',
            linkColor: 'text-green-500',
            visualClass: 'bg-gradient-to-br from-green-500 to-blue-500'
        },
        {
            title: 'Business Match',
            description: 'Swipe left and match with other buyers and suppliers in your industry supply chain.',
            iconUrl: 'https://cdn3.iconfinder.com/data/icons/big-data-105/496/data-communication-network-connection-share-1024.png',
            iconBgClass: 'bg-rose-50',
            iconColor: 'text-rose-500',
            gradientClass: 'from-rose-500/5 to-orange-500/5',
            linkColor: 'text-rose-500',
            visualClass: 'bg-gradient-to-br from-rose-500 to-orange-500'
        },
        {
            title: 'Supplier BEE',
            description: 'Transform your supplier database and access untapped business opportunities for a more equitable future.',
            iconUrl: 'https://cdn4.iconfinder.com/data/icons/data-management-18/64/data-aggregation-connection-compilation-information-1024.png', 
            iconBgClass: 'bg-orange-50',
            iconColor: 'text-orange-500',
            gradientClass: 'from-orange-500/5 to-yellow-500/5',
            linkColor: 'text-orange-500',
            visualClass: 'bg-gradient-to-br from-orange-500 to-yellow-500'
        },
        {
            title: 'Supplier Database',
            description: 'Unlock the full potential of your supplier database, reducing redundancies and empowering growth.',
            iconUrl: 'https://cdn3.iconfinder.com/data/icons/research-and-development-5/64/analysis_data_chart_information_management-1024.png',
            iconBgClass: 'bg-blue-50',
            iconColor: 'text-blue-500',
            gradientClass: 'from-blue-500/5 to-purple-500/5',
            linkColor: 'text-blue-500',
            visualClass: 'bg-gradient-to-br from-blue-500 to-purple-500'
        }
    ];

    stats = [
        { value: '10K+', label: 'Active Users', color: 'bg-gradient-to-r from-rose-500 to-orange-500' },
        { value: '98%', label: 'Satisfaction Rate', color: 'bg-gradient-to-r from-orange-500 to-yellow-500' },
        { value: '24/7', label: 'Support Available', color: 'bg-gradient-to-r from-yellow-500 to-green-500' },
        { value: 'ZAR2M+', label: 'Funding Secured', color: 'bg-gradient-to-r from-green-500 to-blue-500' }
    ];

    setActiveFeature(index: number) {
        this.activeFeature = index;
    }

    clearActiveFeature() {
        this.activeFeature = null;
    }

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        // Add scroll-based animations if needed
    }
}
