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
        <!-- Written Testimonials Section with improved spacing -->
        <div class="mb-16">
          <!-- Section Header with adjusted margins -->
          <div class="text-center mb-16 relative">
            <div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <svg class="w-12 h-12 text-blue-500/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
              </svg>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              What Our Clients Say
            </h2>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm md:text-base mb-6">
              Discover how we've helped businesses transform their operations and achieve their goals
            </p>
            <div class="absolute h-1 w-20 bg-gradient-to-r from-blue-500 to-teal-500 left-1/2 transform -translate-x-1/2"></div>
          </div>

          <!-- Written Testimonials Grid with improved spacing -->
          <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <ng-container *ngFor="let testimonial of testimonials">
              <div class="group relative">
                <!-- Decorative Elements -->
                <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                
                <!-- Card Content with improved internal spacing -->
                <div class="relative h-full p-8 bg-white rounded-xl shadow-lg border border-slate-100 transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <!-- Quote Icon -->
                  <div class="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>

                  <!-- Rating with consistent spacing -->
                  <div class="flex items-center gap-2 mb-6">
                    <div class="flex gap-0.5">
                      <ng-container *ngFor="let star of [1,2,3,4,5]">
                        <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </ng-container>
                    </div>
                    <span class="text-sm text-slate-600">({{testimonial.rating}})</span>
                  </div>

                  <!-- Content with improved spacing -->
                  <p class="text-base text-slate-600 leading-relaxed mb-8 italic">
                    "{{testimonial.content}}"
                  </p>

                  <!-- Author with consistent spacing -->
                  <div class="flex items-center gap-4 mt-auto">
                    <div class="relative flex-shrink-0">
                      <div class="w-14 h-14 rounded-full bg-gradient-to-br from-blue-100 to-teal-100 
                                flex items-center justify-center ring-2 ring-offset-2 ring-slate-100">
                        <span class="text-lg font-bold text-slate-700">
                          {{testimonial.initials}}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 class="text-lg font-semibold text-slate-800 mb-1">{{testimonial.name}}</h4>
                      <p class="text-sm text-slate-500">{{testimonial.title}}</p>
                    </div>
                  </div>

                  <!-- Decorative Corner -->
                  <div class="absolute bottom-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                    <div class="absolute bottom-0 right-0 w-8 h-8 transform rotate-45 translate-x-1/2 translate-y-1/2 bg-gradient-to-r from-blue-500/5 to-teal-500/5"></div>
                  </div>
                </div>
              </div>
            </ng-container>
          </div>
        </div>

        <!-- Video Testimonials Section with improved spacing -->
        <div class="relative pt-8">
          <div class="text-center mb-12">
            <h3 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              Watch Our Success Stories
            </h3>
            <p class="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
              See how our platform has transformed businesses across industries
            </p>
          </div>

          <div class="relative w-full max-w-7xl mx-auto">
            <div class="video-carousel relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
              <div class="video-stack relative w-full flex justify-center">
                <ng-container *ngFor="let video of videos; let i = index">
                  <div class="video-card absolute w-full max-w-[320px] md:max-w-[420px] transform-gpu transition-all duration-500 hover:z-30"
                       [ngStyle]="getVideoCardStyle(i)">
                    <div class="relative aspect-video bg-white rounded-xl overflow-hidden shadow-xl 
                                transform-gpu transition-all duration-500 hover:scale-105">
                      <img [src]="video.thumbnail" [alt]="video.title" class="w-full h-full object-cover"/>
                      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>
                      <div class="absolute bottom-0 left-0 right-0 p-4">
                        <div class="flex items-center justify-between">
                          <h4 class="text-white font-medium text-sm md:text-base">{{video.title}}</h4>
                          <span class="text-gray-200 text-sm">{{video.duration}}</span>
                        </div>
                      </div>
                      <button class="absolute inset-0 w-full h-full flex items-center justify-center group">
                        <div class="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm
                                  flex items-center justify-center transform-gpu transition-all duration-300 
                                  group-hover:scale-110 group-hover:bg-white/30">
                          <svg class="w-7 h-7 text-white transform translate-x-0.5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .video-stack {
      perspective: 2000px;
      transform-style: preserve-3d;
    }

    .video-card {
      --translate-x: 0;
      --translate-y: 0;
      --translate-z: 0;
      --rotate-y: 0;
      --scale: 1;
      transform: translate3d(var(--translate-x), var(--translate-y), var(--translate-z)) 
                 rotateY(var(--rotate-y)) scale(var(--scale));
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    }

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
  `]
})
export class TestimonialsComponent implements OnInit {
  testimonials = [
    {
      name: 'John Doe',
      initials: 'JD',
      title: 'CEO, Tech Solutions',
      content: 'Innoble simplified our compliance process and helped us secure new opportunities. Their innovative approach and dedicated support team made the entire journey smooth and efficient.',
      rating: '5.0'
    },
    {
      name: 'Sarah Mitchell',
      initials: 'SM',
      title: 'Founder, Growth Co',
      content: 'The automated compliance system saved us countless hours. The funding opportunities were a game-changer for our business growth. The team\'s expertise in fintech solutions is unmatched.',
      rating: '5.0'
    },
    {
      name: 'Robert Johnson',
      initials: 'RJ',
      title: 'Director, Swift Services',
      content: 'Outstanding service! The team at Innoble made compliance straightforward and accessible. Their platform\'s intuitive design and powerful features exceeded our expectations.',
      rating: '5.0'
    }
  ];

  videos = [
    {
      title: 'How you look to lenders',
      duration: '5:06',
      thumbnail: 'https://picsum.photos/id/10/400/225'
    },
    {
      title: 'Credit utilisation explained',
      duration: '3:45',
      thumbnail: 'https://picsum.photos/id/20/400/225'
    },
    {
      title: 'Success story',
      duration: '4:12',
      thumbnail: 'https://picsum.photos/id/30/400/225'
    },
    {
      title: 'Building business credit',
      duration: '6:18',
      thumbnail: 'https://picsum.photos/id/40/400/225'
    },
    {
      title: 'Funding options overview',
      duration: '4:55',
      thumbnail: 'https://picsum.photos/id/50/400/225'
    }
  ];

  getVideoCardStyle(index: number) {
    const totalCards = this.videos.length;
    const centerIndex = Math.floor(totalCards / 2);
    const offset = index - centerIndex;
    
    // Base transformations
    let translateX = `${offset * 70}%`;
    let translateZ = '0px';
    let rotateY = `${offset * -15}deg`;
    let scale = 1;
    let zIndex = totalCards - Math.abs(offset);

    // Adjust scale and z-translation based on distance from center
    if (offset !== 0) {
      scale = Math.max(0.8, 1 - Math.abs(offset) * 0.1);
      translateZ = `-${Math.abs(offset) * 100}px`;
    }

    return {
      transform: `translate3d(${translateX}, 0, ${translateZ}) rotateY(${rotateY}) scale(${scale})`,
      zIndex: zIndex,
      opacity: Math.max(0.5, 1 - Math.abs(offset) * 0.2)
    };
  }

  constructor() {}

  ngOnInit() {}
}