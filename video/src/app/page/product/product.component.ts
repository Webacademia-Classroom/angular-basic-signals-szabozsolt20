import { Component, OnInit, computed, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product';
import { RouterModule } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

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
   * TODO!
   * Create a signal that stores array of Products.
   * @type {Product[]} list
   * @default []
   */
  list = signal<Product[]>([]);

  /**
   * TODO!
   * Create a signal that stores the text to filter the table.
   * @type {string} filterText
   * @default ''
   */
  filterText = signal<string>('');

  /**
   * Sum of prices.
   * The callback function of the computed property walks through all products
   * in this.list array and returns the total amount of prices.
   * @type {computed<number>} sumPrice
   */
  sumPrice = computed(() => {
    return this.list().reduce(( sum, item ) => sum + item.price, 0 );
  });

  /**
   * TODO!
   * Create a computed signal property, that filters this.list array.
   * The callback function of the computed property filters this.list array and
   * returns the length of active items.
   * @type {computed<number>} activeQty
   */
  activeQty = computed(() => {
    return this.list().filter(item => item.active).length;
  });

  listQty = 0;

  constructor() {
    /**
     * TODO!
     * Call an effect, that sets the this.listQty variable.
     * If this.list() exists, callback function returns the length of it,
     * othervise returns 0.
     * @call {effect}
     */
    effect(() => {
      this.listQty = this.list()?.length || 0;
    });
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      list => this.list.set(list)
    );
  }

  updateFilterText(ev: InputEvent): void {
    this.filterText.set((ev.target as HTMLInputElement).value as string);
  }

  onRemove(product: Product): void {
    this.productService.remove(product).subscribe(
      () => {
        /**
         * TODO!
         * Update this.list signal.
         * Filter the list and remove elements based on this funciton:
         * item => item.id !== product.id
         */
        this.list.update(list => list.filter(item => item.id !== product.id));
      }
    )
  }

}
