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
  @Input() editModeOn: boolean;
  @Input() user: User;
  newUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onCancel() {
    console.log('-->', this.user);
    this.userService.modalWindow.emit(false);
    this.userService.editMode.emit(false);
  }

  onSubmit() {
    if (this.editModeOn) {
      this.userService.editMode.emit(false);
      console.log('-->', this.user);
    }

    this.newUser = new User(
      this.signupForm.value.id,
      this.signupForm.value.firstName,
      this.signupForm.value.lastName,
      this.signupForm.value.email,
      this.signupForm.value.age
    );
    this.userService.addUser(this.newUser);

    console.log('-->', this.newUser);

    this.userService.modalWindow.emit(false);
  }
}
