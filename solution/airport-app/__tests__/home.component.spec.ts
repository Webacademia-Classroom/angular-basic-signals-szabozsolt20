import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getFileContent } from './test.utils';

import { HomeComponent } from '../src/app/page/home/home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component template should be inline', () => {
    const content = getFileContent('src/app/page/home/home.component.ts');
    const isInline = /template\:/gm.test(content);

    expect(isInline).toBeTruthy();
  });

  it('component style should be inline', () => {
    const content = getFileContent('src/app/page/home/home.component.ts');
    const isInline = /styles\:/gm.test(content);

    expect(isInline).toBeTruthy();
  });

  it('Angular CommonModule should be imported', () => {
    const content = getFileContent('src/app/page/home/home.component.ts');
    const hasImport = /import[\s\S]*\{[\s\S]*CommonModule[\s\S]*\}[\s\S]*from[\s\S]*[\'\"]\@angular\/common[\'\"]/gm.test(content);
    const hasCommonModule = /imports\: *\[[\s\S]*CommonModule[\s\S]*\]/gm.test(content);

    expect(hasImport && hasCommonModule).toBeTruthy();
  });

  it('HomePage text should visible', () => {
    const textContent = fixture.debugElement.nativeElement.textContent;

    expect(textContent).toMatch(/HomePage/gmi);
  });
});
