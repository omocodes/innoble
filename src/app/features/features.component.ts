import { Component } from '@angular/core';
import { LucideAngularModule, Shield, Zap, Building2, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section class="container space-y-8 py-12 lg:py-20">
      <div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 class="text-3xl font-bold leading-[1.1] sm:text-4xl">Why Choose Innoble</h2>
        <p class="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Our platform provides end-to-end solutions for small businesses looking to grow and succeed in the supply
          chain.
        </p>
      </div>
      <div class="mx-auto grid gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
            <i-lucide name="shield" class="h-6 w-6 text-teal-500"></i-lucide>
          </div>
          <h3 class="mt-3 text-lg font-bold">Compliance Automation</h3>
          <p class="mt-2 text-sm text-muted-foreground">
            Simplify and automate your compliance processes with our intelligent platform.
          </p>
          <a class="mt-3 flex items-center gap-1 text-sm font-medium text-teal-500 hover:underline" href="#">
            Learn more
            <i-lucide name="chevron-right" class="h-4 w-4"></i-lucide>
          </a>
        </div>
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-6">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
            <i-lucide name="zap" class="h-6 w-6 text-teal-500"></i-lucide>
          </div>
          <h3 class="mt-3 text-lg font-bold">Financial Assistance</h3>
          <p class="mt-2 text-sm text-muted-foreground">
            Access the financial support you need to grow your business and seize opportunities.
          </p>
          <a class="mt-3 flex items-center gap-1 text-sm font-medium text-teal-500 hover:underline" href="#">
            Learn more
            <i-lucide name="chevron-right" class="h-4 w-4"></i-lucide>
          </a>
        </div>
        <div class="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:col-span-2 md:col-span-1">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-500/10">
            <i-lucide name="building-2" class="h-6 w-6 text-teal-500"></i-lucide>
          </div>
          <h3 class="mt-3 text-lg font-bold">Supply Opportunities</h3>
          <p class="mt-2 text-sm text-muted-foreground">
            Discover and secure new supply chain opportunities that match your business.
          </p>
          <a class="mt-3 flex items-center gap-1 text-sm font-medium text-teal-500 hover:underline" href="#">
            Learn more
            <i-lucide name="chevron-right" class="h-4 w-4"></i-lucide>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FeaturesComponent {}