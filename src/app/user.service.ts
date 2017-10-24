import {EventEmitter, Injectable} from '@angular/core';
import {User} from './user.model';

@Injectable()
export class UserService {
  modalWindow = new EventEmitter<boolean>();

  private users: User[] = [
    new User(0, 'John', 'Connor', 'johnconnor@sky.net', 10),
    new User(1, 'Sarah', 'Connor', 'sarahconnor@sky.net', 29),
    new User(2, 'T-800', 'Model 101', 'schwarzenegger@sky.net', 44),
    new User(3, 'John', 'Connor', 'johnconnor@sky.net', 10),
  ];

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
