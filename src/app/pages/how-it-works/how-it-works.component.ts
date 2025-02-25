import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  template: `
    <section class="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="container mx-auto px-4 py-16">
        <h1 class="mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          How It Works
        </h1>
        
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-4 top-0 h-full w-0.5 bg-blue-500/20 md:left-1/2"></div>
          
          <!-- Steps -->
          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="relative flex flex-col md:flex-row md:justify-between">
              <div class="ml-12 md:ml-0 md:w-5/12">
                <div class="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm">
                  <h3 class="mb-4 text-xl font-semibold text-white">1. Sign Up</h3>
                  <p class="text-gray-300">Create your account and tell us about your business needs.</p>
                </div>
              </div>
              <div class="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white md:left-1/2 md:-ml-4">1</div>
            </div>
            
            <!-- Step 2 -->
            <div class="relative flex flex-col md:flex-row md:justify-between">
              <div class="ml-12 md:ml-0 md:w-5/12 md:translate-x-full">
                <div class="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm">
                  <h3 class="mb-4 text-xl font-semibold text-white">2. Choose Services</h3>
                  <p class="text-gray-300">Select the services you need for your business compliance.</p>
                </div>
              </div>
              <div class="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white md:left-1/2 md:-ml-4">2</div>
            </div>
            
            <!-- Step 3 -->
            <div class="relative flex flex-col md:flex-row md:justify-between">
              <div class="ml-12 md:ml-0 md:w-5/12">
                <div class="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm">
                  <h3 class="mb-4 text-xl font-semibold text-white">3. Automated Setup</h3>
                  <p class="text-gray-300">Our system handles the paperwork and compliance requirements.</p>
                </div>
              </div>
              <div class="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white md:left-1/2 md:-ml-4">3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HowItWorksComponent {}