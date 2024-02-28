import 'zone.js/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductComponent } from './product.component';
import { ProductService } from '../../service/product.service';
import { products } from '../../../test/products';
import { Product } from '../../model/product';
import { CommonModule } from '@angular/common';
import { RouterModule, provideRouter, withComponentInputBinding } from '@angular/router';
import { FilterPipe } from '../../pipe/filter.pipe';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { routes } from '../../app.routes';

const productServiceMock = {
  getAll: () => of(products),
  remove: (product: Product) => of(product),
};

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductComponent,
        HttpClientTestingModule,
        CommonModule,
        RouterModule,
        FilterPipe,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [
        provideRouter(routes, withComponentInputBinding()),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('list signal should exist', () => {
    expect(Object.hasOwn(component, 'list')).toBeTruthy();
    if (component.list) {
      expect(typeof component.list === 'function').toBeTruthy();
      expect(typeof component.list?.set === 'function').toBeTruthy();
      expect(component.list()).toEqual([]);
    } else {
      expect(false).toBeTruthy();
    }
  });

  it('filterText signal should exist', () => {
    expect(Object.hasOwn(component, 'filterText')).toBeTruthy();
    if (Object.hasOwn(component, 'filterText')) {
      expect(typeof component['filterText'] === 'function').toBeTruthy();
      expect(typeof component['filterText'].set === 'function').toBeTruthy();
      expect(component['filterText']()).toEqual('');
    } else {
      expect(false).toBeTruthy();
    }
  });

  it('activeQty signal should exist', () => {
    expect(Object.hasOwn(component, 'activeQty')).toBeTruthy();
    if (Object.hasOwn(component, 'activeQty')) {
      expect(typeof component['activeQty'] === 'function').toBeTruthy();
      expect(component['activeQty']()).toEqual(0);
    } else {
      expect(false).toBeTruthy();
    }
  });

  it('sumPrice value should be shown', () => {
    component.list.set(products);

    fixture.detectChanges();

    const cont = fixture.debugElement.nativeElement.querySelector('.sumprice-container');
    expect(cont.textContent).toMatch(/303/);
  });

  it('activeQty value should be shown', () => {
    component.list.set(products);

    fixture.detectChanges();

    const cont = fixture.debugElement.nativeElement.querySelector('.activeqty-container');
    expect(cont.textContent).toMatch(/3/);
  });

  it('effect should change this.listQty value', () => {
    component.list.set(products);

    fixture.detectChanges();

    expect(component.listQty).toEqual(4);
  });

  it('activeQty should be correct', () => {
    component.list.set(products);

    fixture.detectChanges();

    expect(component.activeQty()).toEqual(3);
  });

  it('onRemove method should be called', async () => {
    const spy = jest.spyOn(component, 'onRemove');
    component.list.set(products);
    component.productService = productServiceMock as ProductService;

    fixture.detectChanges();
    await fixture.whenStable();

    let tr = fixture.nativeElement.querySelector('table tbody tr');
    const buttons = tr.querySelectorAll('button');
    (buttons[1] as HTMLButtonElement).dispatchEvent(new Event('click'));

    fixture.detectChanges();
    await fixture.whenStable();
    await new Promise(resolve => setTimeout(resolve, 1000));

    const trs = fixture.nativeElement.querySelectorAll('table tbody tr');
    expect(spy).toHaveBeenCalledWith(products[0]);
    expect(trs.length).toEqual(3);
  });



});
