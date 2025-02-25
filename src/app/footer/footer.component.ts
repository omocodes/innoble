import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <footer class="bg-gradient-to-br from-blue-50 via-white to-blue-50 text-gray-600 relative overflow-hidden">
      <!-- Animated background patterns -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" stroke-width="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>

        <!-- Enhanced animated elements -->
        <div class="animate-float-slow absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"></div>
        <div class="animate-float-medium absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl"></div>
        <div class="animate-float-fast absolute left-1/2 bottom-0 h-72 w-72 rounded-full bg-blue-100/30 blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 py-12 relative">  <!-- Reduced py -->
        <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative">
          <!-- Company Info -->
          <div class="space-y-6">
            <div>
              <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-4">Innoble</h3>
              <p class="text-gray-600 leading-relaxed mb-4">
                Transforming financial services through innovative technology solutions and digital excellence.
              </p>
            </div>
            <address class="flex flex-col gap-4 not-italic">
              <a href="mailto:info@innoble.co.za" class="inline-flex items-center gap-3 group hover:text-blue-600 transition-all duration-200">
                <div class="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                infoinnoble.co.za
              </a>
              <a href="tel:+27000000000" class="inline-flex items-center gap-3 group hover:text-teal-600 transition-all duration-200">
                <div class="bg-teal-100 p-2 rounded-lg group-hover:bg-teal-200 transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                +27 00 000 0000
              </a>
            </address>
          </div>

          <!-- Office Locations -->
          <div class="space-y-3">  <!-- Reduced space here -->
            <h3 class="text-xl font-bold text-gray-800 mb-2">Our Offices</h3> <!-- Reduced mb -->
            <div *ngFor="let office of offices" class="flex items-start gap-3 p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors duration-200">
              <div [ngClass]="office.iconBg" class="p-2 rounded-lg mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold text-gray-800">{{ office.name }}</h4>
                <div class="space-y-0">  <!-- Reduced spacing to 0 -->
                  <p class="text-gray-600">{{ office.address }}</p>
                  <p class="text-gray-600">{{ office.city }}</p>
                  <p class="text-gray-600">{{ office.postalCode }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Products & Services -->
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-6">Products & Services</h3>
            <div class="grid grid-cols-1 gap-3">
              <a *ngFor="let product of products" [routerLink]="product.link" class="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                <span [ngClass]="product.color" class="w-2 h-2 bg-gradient-to-r rounded-full group-hover:w-3 transition-all duration-200"></span>
                {{ product.name }}
              </a>
            </div>
          </div>

          <!-- Legal & Support -->
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-6">Legal & Support</h3>
            <div class="grid grid-cols-1 gap-3">
              <a *ngFor="let legal of legalLinks" [routerLink]="legal.link" class="hover:text-blue-600 transition-colors duration-200 flex items-center gap-2 group">
                <span [ngClass]="legal.color" class="w-2 h-2 bg-gradient-to-r rounded-full group-hover:w-3 transition-all duration-200"></span>
                {{ legal.name }}
              </a>
            </div>

            <!-- Social Icons (Moved Below Legal & Support) -->
            <div class="flex items-center gap-6 mt-2">  <!-- Reduced mt -->
              <a *ngFor="let social of socialLinks" [href]="social.link" class="text-gray-600 hover:text-blue-600 transition-colors duration-200" [attr.aria-label]="social.name">
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path [attr.d]="social.iconPath"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="pt-6 mt-6 border-t border-gray-200 text-center text-gray-600">  <!-- Reduced pt and mt even more -->
          &copy; {{ currentYear }} Innoble Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  offices = [
    {
      name: 'Johannesburg (Head Office)',
      address: '123 Innovation Street',
      city: 'Sandton',
      postalCode: '2196',
      iconBg: 'bg-blue-100'
    },
    {
      name: 'Cape Town',
      address: '456 Digital Avenue',
      city: 'Woodstock',
      postalCode: '7925',
      iconBg: 'bg-teal-100'
    }
  ];

  products = [
    { name: 'Payment Solutions', link: '/payments', color: 'from-blue-400 to-blue-600' },
    { name: 'Digital Banking', link: '/banking', color: 'from-teal-400 to-teal-600' },
    { name: 'Investment Platform', link: '/investments', color: 'from-purple-400 to-purple-600' },
    { name: 'Enterprise Solutions', link: '/enterprise', color: 'from-indigo-400 to-indigo-600' }
  ];

  legalLinks = [
    { name: 'Privacy Policy', link: '/privacy', color: 'from-red-400 to-red-600' },
    { name: 'Terms & Conditions', link: '/terms', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Security', link: '/security', color: 'from-green-400 to-green-600' },
    { name: 'Help Center', link: '/help', color: 'from-blue-400 to-blue-600' }
  ];

    // Data for social links
    socialLinks = [
        {
            name: 'Twitter',
            link: '#',
            iconPath: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
        },
        {
            name: 'LinkedIn',
            link: '#',
            iconPath: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
        },
        {
            name: 'Instagram',
            link: '#',
            iconPath: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427A4.902 4.902 0 013.68 3.68a4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.16 1.977 9.5 1.964 12.123 1.964h.08c2.643 0 2.987.012 4.043.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153'
        },
        {
            name: 'YouTube',
            link: '#',
            iconPath: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.359 4.14-4.359 8.581 0 4.44 0 4.861 8.314 8.58 8.314 3.598.233 11.625.234 15.223 0 3.897-.266 4.359-4.141 4.359-8.581 0-4.44-0.462-8.313-4.359-8.313zm-4.061 11.369v-8.107l4.083 3.908-4.083 4.199z'
        }
    ];
}
