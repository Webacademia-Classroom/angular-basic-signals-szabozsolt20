import { Component, inject } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    UserListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ang-basic-practice003-comp-pipe';

  userService: UserService = inject(UserService);

  userList: User[] = this.userService.list;

  constructor() {}

  /**
   * TODO!
   * Method wich runs for the app-user-list delUser event.
   * Name: onDeleteUser
   * Functionality:
   * 1. Calls the this.userService.removeUser method with the given user.
   * @param user {User} - a user
   * @returns {void}
   */
  onDeleteUser(user: User): void {
    this.userService.removeUser(user);
  }

}
