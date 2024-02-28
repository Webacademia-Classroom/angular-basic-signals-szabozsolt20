import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IPriceItem {
  name: string;
  price: number;
  options: string[];
  btnClass: string;
  btnText: string;
}

@Component({
  selector: 'app-pricing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.css'
})
export class PricingPageComponent {
  priceTable: IPriceItem[] = [
    {
      name: 'Free',
      price: 0,
      options: [
        '10 students',
        '2GB space',
        'Email support',
        'Documentation',
      ],
      btnClass: 'btn-outline-primary',
      btnText: 'Free registration',
    },
    {
      name: 'Pro',
      price: 15,
      options: [
        '50 students',
        '5GB space',
        'Chat support',
        'Documentation',
      ],
      btnClass: 'btn-primary',
      btnText: 'First steps',
    },
    {
      name: 'Enterprise',
      price: 29,
      options: [
        '1000 students',
        '20GB space',
        'Phone support',
        'Documentation',
      ],
      btnClass: 'btn-primary',
      btnText: 'Contact',
    },
  ];

  constructor() { }

  calcPricePerStudent(price: number, students: string) : number {
    const studentsNum = parseInt(students);
    return price / studentsNum;
  }

  /**
   * Method to log the given IPriceItem on the console.
   * @name logPackage
   * @returns void
   */
  logPackage(item: IPriceItem): void {
    console.log(item);
  }

  ngOnInit(): void {
  }
}
