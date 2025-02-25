import { Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  standalone: true,
  template: `
    <section class="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div class="container mx-auto px-4 py-16">
        <h1 class="mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Resources
        </h1>
        
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Resource Cards -->
          <div class="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm">
            <h3 class="mb-4 text-xl font-semibold text-white">Compliance Guides</h3>
            <p class="mb-4 text-gray-300">Comprehensive guides to help you navigate business compliance requirements.</p>
            <a href="#" class="text-blue-400 hover:text-blue-300">Learn more →</a>
          </div>
          
          <div class="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm">
            <h3 class="mb-4 text-xl font-semibold text-white">Templates & Tools</h3>
            <p class="mb-4 text-gray-300">Download ready-to-use templates and access our business tools.</p>
            <a href="#" class="text-blue-400 hover:text-blue-300">Access now →</a>
          </div>
          
          <div class="rounded-lg bg-slate-800/50 p-6 backdrop-blur-sm">
            <h3 class="mb-4 text-xl font-semibold text-white">Knowledge Base</h3>
            <p class="mb-4 text-gray-300">Articles and FAQs about business registration and compliance.</p>
            <a href="#" class="text-blue-400 hover:text-blue-300">Explore →</a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ResourcesComponent {}