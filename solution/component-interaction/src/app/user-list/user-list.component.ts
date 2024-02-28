import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    UserDetailComponent,
  ],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /**
   * TASK!
   * Set the following input property.
   * @var users {User[]} - the input property
   * @default [] - the default value is an empty Array
   */
  @Input() users: User[] = [];

  @Output() delUser: EventEmitter<User> = new EventEmitter();
  currentUser: User = new User();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * TODO!
   * Method which runs when the user clicks on the eye button.
   * Name: onSelectUser
   * Funtionality: set the value of the this.currentUser to the given variable.
   * @param user {User} - a user
   * @returns {void}
   */
  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  /**
   * TODO!
   * The method that runs on the app-user-detail's delUser event.
   * Name: onDeleteUser
   * Functionality:
   * 1. Calls the this.delUser.emit method with the given user.
   * 2. Update the this.currentUser to a new User.
   * @param user {User} - a user
   * @returns {void}
   */
  onDeleteUser(user: User): void {
    this.delUser.emit(user);
    this.currentUser = new User();
  }

}
