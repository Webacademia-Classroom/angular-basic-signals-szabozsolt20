import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getFileContent } from './test.utils';

import { AboutComponent } from '../src/app/page/about/about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Angular CommonModule should be imported', () => {
    const content = getFileContent('src/app/page/about/about.component.ts');
    const hasImport = /import[\s\S]*\{[\s\S]*CommonModule[\s\S]*\}[\s\S]*from[\s\S]*[\'\"]\@angular\/common[\'\"]/gm.test(content);
    const hasCommonModule = /imports\: *\[[\s\S]*CommonModule[\s\S]*\]/gm.test(content);

    expect(hasImport && hasCommonModule).toBeTruthy();
  });

  it('AboutPage text should visible', () => {
    const textContent = fixture.debugElement.nativeElement.textContent;

    expect(textContent).toMatch(/AboutPage/gmi);
  });
});
