import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [
    CommonModule,
    RouterModule,
    FilterPipe,
  ],
  providers: [
    ProductService,
  ],
})
export class ProductComponent implements OnInit {

  productService = inject(ProductService);

  displayedColumns: string[] = ['id', 'name', 'price', 'description'];

  // Signals
  /**
   * @type {Signal<Product[]>} products
   * @default []
   */


  /**
   * @type {Signal<string>} filter
   * @default ''
   */


  /**
   * @type {computed<number>} allPrice
   */



  listQty = 0;

  constructor() {
    /**
     * If this.list() exists, callback function returns the length of it,
     * othervise returns 0.
     * @call {effect}
     */


  }

  ngOnInit(): void {
    this.products.set(this.productService.list);
  }

  onRemove(product: Product): void {
    /**
     * Remove the deleted element and update products.
     */


  }

}
