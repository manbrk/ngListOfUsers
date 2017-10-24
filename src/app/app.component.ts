import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from './user.model';
import {UserService} from './user.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  users: User[];
  title = 'Users';
  modalWindow = false;
  newUser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  onAddUser() {
    this.modalWindow = false;
    this.newUser = new User(
      this.signupForm.value.id,
      this.signupForm.value.firstName,
      this.signupForm.value.lastName,
      this.signupForm.value.email,
      this.signupForm.value.age
    );
    this.userService.addUser(this.newUser);
    console.log('-->', this.newUser);
  }

  onDeleteUser(user) {
    this.userService.deleteUser(user);
  }

}
