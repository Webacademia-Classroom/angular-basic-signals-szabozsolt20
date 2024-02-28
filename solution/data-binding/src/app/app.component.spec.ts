import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        PricingPageComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('1. Az oldal címe: Silicon-Walley LTD.', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top h5').textContent;
    expect(content).toContain('Silicon-Walley LTD.');
  });

  // Menüpontok.
  it('első menüpont: Services', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(1)').textContent;
    expect(content).toContain('Services');
  });
  it('első menüpont linkje: /services', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(1)').getAttribute('href');
    expect(link).toContain('/services');
  });

  it('második menüpont: Enterprise', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(2)').textContent;
    expect(content).toContain('Enterprise');
  });
  it('második menüpont linkje: /enterprise', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(2)').getAttribute('href');
    expect(link).toContain('/enterprise');
  });

  it('harmadik menüpont: Support', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(3)').textContent;
    expect(content).toContain('Support');
  });
  it('harmadik menüpont linkje: /support', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(3)').getAttribute('href');
    expect(link).toContain('/support');
  });

  it('negyedik menüpont: Prices', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top nav a:nth-child(4)').textContent;
    expect(content).toContain('Prices');
  });
  it('negyedik menüpont linkje: /prices', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const link = compiled.querySelector('.sticky-top nav a:nth-child(4)').getAttribute('href');
    expect(link).toContain('/prices');
  });

  it('regisztráció gomb szövege: Registration', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.sticky-top .btn-outline-primary').textContent;
    expect(content).toContain('Registration');
  });



});
