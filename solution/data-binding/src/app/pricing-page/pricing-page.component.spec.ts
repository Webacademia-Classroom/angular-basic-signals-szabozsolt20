import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingPageComponent } from './pricing-page.component';

describe('PricingPageComponent', () => {
  let component: PricingPageComponent;
  let fixture: ComponentFixture<PricingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PricingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Names.
  it('first name: Free', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col-4:first-child h4').textContent).toContain('Free');
  });
  it('second name: Pro', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col-4:nth-child(2) h4').textContent).toContain('Pro');
  });
  it('third name: Enterprise', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.col-4:nth-child(3) h4').textContent).toContain('Enterprise');
  });

  // Prices.
  it('first price: $0', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(1) .card-body .pricing-card-title').textContent;
    expect(content).toContain('$0');
  });
  it('second price: $15', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(2) .card-body .pricing-card-title').textContent;
    expect(content).toContain('$15');
  });
  it('third price: $29', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(3) .card-body .pricing-card-title').textContent;
    expect(content).toContain('$29');
  });

  // Options.
  it('options on the first card should correct', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(1) .card-body .list-unstyled').textContent;
    expect(content).toContain('10 students');
  });
  it('options on the second card should correct', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(2) .card-body .list-unstyled').textContent;
    expect(content).toContain('Chat support');
  });
  it('options on the third card should correct', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(3) .card-body .list-unstyled').textContent;
    expect(content).toContain('20GB space');
  });

  // Buttons.
  it('first button text sould be: Free registration', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(1) button').textContent;
    expect(content).toContain('Free registration');
  });
  it('second button text sould be: First steps', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(2) button').textContent;
    expect(content).toContain('First steps');
  });
  it('third button text sould be: Contact', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const content = compiled.querySelector('.col-4:nth-child(3) button').textContent;
    expect(content).toContain('Contact');
  });

  // Methods.
  it('logPackage method should exist', () => {
    expect( component ).toHaveProperty( 'logPackage' );
  });

});
