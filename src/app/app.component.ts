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
  editModeOn = false;
  userForEdit: User;

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
        (mode: boolean) => {
          this.editModeOn = mode;
        }
      );
  }

  onDeleteUser(user) {
    this.userService.deleteUser(user);
  }

  onEditUser(user) {
    this.editModeOn = true;
    console.log('-->', this.editModeOn);
    this.modalWindow = true;
    this.userForEdit = user;
  }

  onAddUser() {
    this.modalWindow = true;
    console.log('-->', this.editModeOn);
  }

}
