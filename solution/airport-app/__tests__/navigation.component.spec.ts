import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getFileContent } from './test.utils';

import { NavigationComponent } from '../src/app/common/navigation/navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Angular CommonModule should be imported', () => {
    const content = getFileContent('src/app/common/navigation/navigation.component.ts');
    const hasImport = /import[\s\S]*\{[\s\S]*CommonModule[\s\S]*\}[\s\S]*from[\s\S]*[\'\"]\@angular\/common[\'\"]/gm.test(content);
    const hasCommonModule = /imports\: *\[[\s\S]*CommonModule[\s\S]*\]/gm.test(content);

    expect(hasImport && hasCommonModule).toBeTruthy();
  });

  it('Bootstrap navbar should exist in the component', () => {
    const navbar = fixture.debugElement.nativeElement.querySelector('nav.navbar');
    const collapse = fixture.debugElement.nativeElement.querySelector('nav.navbar .collapse');
    const item = fixture.debugElement.nativeElement.querySelector('nav.navbar li.nav-item');
    const link = fixture.debugElement.nativeElement.querySelector('nav.navbar li.nav-item a.nav-link');

    expect(
      navbar &&
      collapse &&
      item &&
      link
    ).toBeTruthy();
  });
});
