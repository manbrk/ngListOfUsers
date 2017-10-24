import {Component, OnInit} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';

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

  ngOnInit() {
    this.users = this.userService.getUsers();

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
    user.selected = !!user.selected;
    this.selectedUser = user;
  }
}
