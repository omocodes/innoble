import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="relative overflow-hidden border-t border-blue-100">
      <!-- Background Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-teal-200/20 to-teal-300/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
      <div class="absolute top-1/4 left-1/3 w-32 h-32 bg-indigo-300/10 rounded-full blur-2xl"></div>
      
      <div class="container mx-auto px-6 py-12 relative z-10">
        <!-- Main Footer Content -->
        <div class="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          <!-- Company Info -->
          <div class="lg:col-span-1 relative">
            <div class="mb-6">
              <div class="relative">
                <div class="absolute -top-2 -left-3 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-sm"></div>
                <img src="https://www.innoble.co.za/assets/v2/images/Logo.png" alt="Innoble Logo" class="h-10 mb-4 relative" />
              </div>
              <p class="text-gray-600 leading-relaxed text-sm md:text-base max-w-sm">
                Innoble helps small businesses automate and simplify compliance for their industries standards.
              </p>
            </div>
            
            <!-- Social Icons -->
            <div class="flex items-center gap-5 mt-6">
              <a *ngFor="let social of socialLinks" [href]="social.link" target="_blank" 
                 class="text-gray-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-md">
                <img [src]="social.icon" alt="{{social.name}}" class="h-5 w-5">
              </a>
            </div>
          </div>

          <!-- Office Locations -->
          <div class="lg:col-span-1">
            <h3 class="text-base font-bold mb-5 uppercase tracking-wide bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Our Offices</h3>
            <div class="space-y-6">
              <div *ngFor="let office of offices" class="group">
                <div class="relative">
                  <div class="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-blue-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h4 class="font-semibold text-gray-800 text-sm mb-2 group-hover:translate-x-1 transition-transform duration-200">{{ office.name }}</h4>
                  <div class="space-y-1 text-sm text-gray-500">
                    <p>{{ office.address }}</p>
                    <p>{{ office.city }}, {{ office.postalCode }}</p>
                  </div>
                  <a [href]="getGoogleMapsLink(office.address, office.city)" target="_blank" 
                    class="inline-flex items-center text-xs mt-2 bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-800 transition-all duration-300">
                    <span>View on Google Maps</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1 text-blue-500 group-hover:text-blue-700 transition-all duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Legal & Support -->
          <div class="lg:col-span-1">
            <h3 class="text-base font-bold mb-5 uppercase tracking-wide bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Legal & Support</h3>
            <div class="space-y-4">
              <a *ngFor="let legal of legalLinks" [routerLink]="legal.link" 
                 class="flex items-center group hover:translate-x-1 transition-all duration-200">
                <div class="relative mr-3">
                  <span [ngClass]="legal.color" 
                        class="w-2 h-2 block bg-gradient-to-r rounded-full group-hover:scale-125 transition-all duration-200"></span>
                  <span [ngClass]="legal.color" 
                        class="absolute -inset-1 bg-gradient-to-r rounded-full opacity-30 group-hover:opacity-60 blur-sm transition-all duration-200"></span>
                </div>
                <span class="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">{{ legal.name }}</span>
              </a>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="lg:col-span-1">
            <h3 class="text-base font-bold mb-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">Contact Us</h3>
            <address class="flex flex-col gap-4 not-italic">
              <a href="mailto:info@innoble.co.za" 
                 class="group hover:translate-x-1 transition-all duration-200">
                <div class="flex items-center gap-3">
                  <div class="bg-gradient-to-br from-blue-500 to-blue-600 p-2 rounded-lg shadow-sm group-hover:shadow-md group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 10.493l7.997-4.609A1 1 0 0016 5H4a1 1 0 00-.997.884z" />
                      <path d="M18 8.118l-8 4.609-8-4.609A1 1 0 002 9v6a1 1 0 001 1h14a1 1 0 001-1V9a1 1 0 00-.003-.882z" />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">info&commat;innoble.co.za</span>
                </div>
              </a>
              <a href="tel:+272111379110" 
                 class="group hover:translate-x-1 transition-all duration-200">
                <div class="flex items-center gap-3">
                  <div class="bg-gradient-to-br from-teal-500 to-teal-600 p-2 rounded-lg shadow-sm group-hover:shadow-md group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span class="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">021 113 79110</span>
                </div>
              </a>
            </address>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-8 mt-10 border-t border-blue-100 flex flex-col sm:flex-row justify-between items-center">
          <div class="text-xs text-gray-500 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">&copy; {{ currentYear }} Innoble Technologies. All Rights Reserved.</div>
          <div class="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" class="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200">Sitemap</a>
            <a href="#" class="text-xs text-gray-500 hover:text-blue-600 transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </div>
      
      <!-- Bottom Decorative Gradient Bar -->
      <div class="h-1 w-full bg-gradient-to-r from-blue-400 via-teal-500 to-blue-600"></div>
    </footer>
  `,
  styles: [`
    @media (max-width: 640px) {
      .container {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  `]
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  offices = [
    {
      name: 'Johannesburg (Head Office)',
      address: 'Clearwater Office Park Corner of Christian De Wet',
      city: 'Roodepoort',
      postalCode: '1735',
      iconBg: 'bg-blue-100'
    },
    {
      name: 'Cape Town',
      address: '189 Victoria Rd',
      city: 'Woodstock',
      postalCode: '7925',
      iconBg: 'bg-teal-100'
    }
  ];

  legalLinks = [
    { name: 'Privacy Policy', link: '/privacy', color: 'from-red-400 to-red-600' },
    { name: 'Terms & Conditions', link: '/terms', color: 'from-yellow-400 to-yellow-600' },
    { name: 'POPIA', link: '/help', color: 'from-blue-400 to-blue-600' }
  ];
  
  socialLinks = [
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/company/innobleinnovation',
      icon: 'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Linkedin-512.png'
    },
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/innoblesolutions',
      icon: 'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Facebook-512.png'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/innoble.co.za',
      icon: 'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png'
    },
    {
      name: 'YouTube',
      link: 'https://www.youtube.com/channel/UC_wXf8f1u0w8EVTNDlwTzcg',
      icon: 'https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Youtube-512.png'
    }
  ];

  constructor(private sanitizer: DomSanitizer) { }

  getGoogleMapsLink(address: string, city: string): SafeUrl {
    const encodedAddress = encodeURIComponent(`${address}, ${city}`);
    const url = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}