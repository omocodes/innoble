import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative py-24 overflow-hidden bg-white">
      <!-- Removed patterned background -->

      <div class="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl"></div>
      <div class="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-teal-200/50 blur-3xl"></div>

      <div class="container relative px-4">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            Trusted By Industry Leaders
          </h2>
        </div>
      </div>
      
      <div class="relative w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-white after:to-transparent">
        <div class="flex animate-scroll-primary py-8">
          <div class="flex min-w-full gap-6">
            <div class="group flex-shrink-0 w-40" *ngFor="let partner of loopedPartners">
              <a [href]="partner.url" target="_blank" rel="noopener noreferrer">
                <img [src]="partner.logo" [alt]="'Partner Logo'" class="max-h-20 transition-all duration-300 filter group-hover:grayscale group-hover:opacity-40" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `@keyframes scroll-primary {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }

    .animate-scroll-primary {
      animation: scroll-primary 45s linear infinite;
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
export class PartnersComponent implements OnInit {
  partners = [
    { logo: 'https://www.aions.co.za/wp-content/uploads/2018/10/Levels-Logo-1024x1024-1160x665.png', url: 'https://www.aions.co.za' },
    { logo: 'https://www.aions.co.za/wp-content/uploads/2022/02/Aions-logo-web-wht.png', url: 'https://www.aions.co.za' },
    { logo: 'https://d2ksis2z2ke2jq.cloudfront.net/uploads/2023/04/MicrosoftTeams-image-16.png', url: 'https://www.groupm.com/' },
    { logo: 'https://www.innovatortrust.co.za/img/Logo.png?v=1.2', url: 'https://www.innovatortrust.co.za' },
    { logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQFrgF8kuc_GRA/company-logo_200_200/company-logo_200_200/0/1630562487222?e=2147483647&v=beta&t=mRkusPflI2zfenfWJx87d7wXUeQo3rorLVspIFJOat0', url: 'https://www.linkedin.com' },
    { logo: 'https://mavensolutions.co.za/wp-content/uploads/2020/06/maven-logo-no-title.png', url: 'https://mavensolutions.co.za' },
    { logo: 'https://www.oldmutual.co.za/v3/assets/blt0554f48052bb4620/blt369381e3fd1e8aee/651589ca3da3ec7827439c76/results-lrg.png', url: 'https://www.oldmutual.co.za' },
    { logo: 'https://rlabslearn.s3.amazonaws.com/static/student/imgs/default.png', url: 'https://rlabs.org' },
    { logo: 'https://at360fin.com/wp-content/uploads/2020/01/LOGO-360.jpg', url: 'https://at360fin.com' }
  ];

  loopedPartners: any[] = [];

  ngOnInit(): void {
    this.loopedPartners = [...this.partners, ...this.partners];
  }
}
