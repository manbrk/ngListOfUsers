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
  basic = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
