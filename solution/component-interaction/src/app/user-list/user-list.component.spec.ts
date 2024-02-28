import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';

import { mockUsers } from '../mocks/mockUsers';
import { UserDetailComponent } from '../user-detail/user-detail.component';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserListComponent,
        UserDetailComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user data in the table should shown', () => {
    component.users = mockUsers;

    fixture.detectChanges();
    const firstRow = fixture.debugElement.nativeElement.querySelectorAll(
      'table tbody tr:first-child td'
    );

    expect(firstRow[0].textContent).toMatch(/1/i);
    expect(firstRow[1].textContent).toMatch(/Tades Casterot/i);
    expect(firstRow[2].textContent).toMatch(/tcasterot0\@sakura\.ne\.jp/i);
    expect(firstRow[3].textContent).toMatch(/41 Heffernan Avenue/i);
    expect(firstRow[4].textContent).toMatch(/false/i);
  });

  it('user detail component should show the card', () => {
    component.users = mockUsers;

    fixture.detectChanges();
    const showBtn = fixture.debugElement.nativeElement.querySelector(
      'table tbody tr:first-child button'
    );
    (showBtn as HTMLButtonElement).click();

    fixture.detectChanges();

    fixture.whenStable().then(
      () => {
        const card = fixture.debugElement.nativeElement.querySelector(
          '.card.user-card .card-body'
        );
        expect(card).toBeTruthy();
      }
    );
  });
});
