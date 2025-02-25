import { Component } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  template: `
    <section class="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="container mx-auto px-4 py-16">
        <h1 class="mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Our Solutions
        </h1>
        
        <div class="grid gap-8 md:grid-cols-2">
          <!-- Solution Cards -->
          <div class="rounded-lg bg-slate-800/50 p-8 backdrop-blur-sm">
            <div class="mb-4 inline-block rounded-full bg-blue-500/10 p-3">
              <svg class="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-semibold text-white">Business Registration</h3>
            <p class="text-gray-300">Streamlined business registration process with automated document filing and status tracking.</p>
          </div>
          
          <div class="rounded-lg bg-slate-800/50 p-8 backdrop-blur-sm">
            <div class="mb-4 inline-block rounded-full bg-teal-500/10 p-3">
              <svg class="h-6 w-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
              </svg>
            </div>
            <h3 class="mb-4 text-2xl font-semibold text-white">Compliance Management</h3>
            <p class="text-gray-300">Automated compliance monitoring and updates to keep your business in good standing.</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SolutionsComponent {}