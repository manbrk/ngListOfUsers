import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../user.service';
import {NgForm} from '@angular/forms';
import {User} from '../user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @Input() modalWindow: boolean;
  @Input() editModeOn: string;
  @Input() user: User;
  newUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onCancel() {
    this.userService.modalWindow.emit(false);
  }

  onSubmit() {
    if (this.editModeOn === 'edit') {
      this.user.firstName = this.signupForm.value.firstName;
      this.user.lastName = this.signupForm.value.lastName;
      this.user.email = this.signupForm.value.email;
      this.user.age = this.signupForm.value.age;

      this.userService.editMode.emit(null);
    }

    if (this.editModeOn === 'add') {
      this.newUser = new User(
        this.signupForm.value.id,
        this.signupForm.value.firstName,
        this.signupForm.value.lastName,
        this.signupForm.value.email,
        this.signupForm.value.age,
        this.signupForm.value.selected
      );
      this.userService.addUser(this.newUser);
    }
    this.userService.modalWindow.emit(false);
  }
}
