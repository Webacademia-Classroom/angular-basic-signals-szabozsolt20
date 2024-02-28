import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface IPriceItem {
  name?: string;
  price?: number;
  options?: string[];
  btnClass: string;
  btnText?: string;
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
      btnClass: 'btn-outline-primary',
    },
    {
      btnClass: 'btn-primary',
    },
    {
      btnClass: 'btn-primary',
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

  ngOnInit(): void {
  }
}
