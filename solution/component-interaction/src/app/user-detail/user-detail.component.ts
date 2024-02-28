import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  /**
   * TODO!
   * Set the following input property.
   * @var user {User} - the input proprty
   * @default a new User
   */
  @Input() user: User = new User();

  @Output() delUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * TODO!
   * Method that runs to the click of delete button.
   * Name: onDelete
   * Functionality: calls this.delUser.emit method with the given user.
   * @param user {User} - the current user
   * @returns {void}
   */
  onDelete(user: User): void {
    this.delUser.emit(user);
  }

}
