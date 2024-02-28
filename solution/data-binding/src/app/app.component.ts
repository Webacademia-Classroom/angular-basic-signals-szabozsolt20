import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PricingPageComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Silicon-Walley LTD.';

  menuItems: { title: string, link: string, order: number }[] = [
    { title: 'Support', link: '/support', order: 3 },
    { title: 'Enterprise', link: '/enterprise', order: 2 },
    { title: 'Services', link: '/services', order: 1 },
    { title: 'Prices', link: '/prices', order: 4 },
  ];

  regButtonText: string = 'Registration';
}
