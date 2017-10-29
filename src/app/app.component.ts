import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserSearchCriteria, UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[];
  title = 'Users';
  modalWindow = false;
  editModeSelected: string;
  userForEdit: User;
  selectedUser: User[];

  constructor(private userService: UserService) {}

  // getUsers(criteria: UserSearchCriteria) {
  //   this.users = this.userService.getUsers(criteria);
  // }

  // onSorted($event) {
  //   this.getUsers($event);
  // }

  ngOnInit() {
    this.users = this.userService.getUsers();

    // this.getUsers({sortColumn: 'firstname', sortDirection: 'asc'});

    this.userService.modalWindow
      .subscribe(
        (modal: boolean) => {
          this.modalWindow = modal;
        }
      );

    this.userService.editMode
      .subscribe(
        (mode: string) => {
          this.editModeSelected = mode;
        }
      );
  }

  onDeleteUser(user) {
    this.userService.deleteUser(user);
  }

  onEditUser(user) {
    this.editModeSelected = 'edit';
    this.modalWindow = true;
    this.userForEdit = user;
  }

  onAddUser() {
    this.editModeSelected = 'add';
    this.modalWindow = true;

  }

  onDeleteCheckedUsers() {
    this.selectedUser = this.users.filter(user => user.selected);
    this.selectedUser.forEach(user => this.userService.deleteUser(user));
  }

  checkbox(user) {
    this.selectedUser = user;
  }
}
