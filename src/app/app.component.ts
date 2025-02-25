import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeroComponent } from './hero/hero.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    HowItWorksComponent,
    WhyChooseComponent,
    TestimonialsComponent,
    PartnersComponent,
    NewsletterComponent,
    FooterComponent
],
  template: `
    <div class="flex min-h-screen flex-col">
      <app-nav></app-nav>
      <main class="flex-1">
        <app-hero></app-hero>
        <app-how-it-works></app-how-it-works>
        <app-why-choose></app-why-choose>
        <app-testimonials></app-testimonials>
        <app-partners></app-partners>
        <app-newsletter></app-newsletter>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'innoble-homepage';
}