import {EventEmitter, Injectable} from '@angular/core';
import {User} from './user.model';

export class UserSearchCriteria {
  sortColumn: 'firstname' | 'lastname' | 'email' | 'age';
  // sortColumn: string;
  sortDirection: string;
}

@Injectable()
export class UserService {
  modalWindow = new EventEmitter<boolean>();
  editMode = new EventEmitter<string>();

  private users: User[] = [
    new User(0, 'John', 'Connor', 'johnconnor@sky.net', 10, false),
    new User(1, 'Sarah', 'Connor', 'sarahconnor@sky.net', 29, false),
    new User(2, 'T-800', 'Model 101', 'schwarzenegger@sky.net', 44, false),
    new User(3, 'John', 'Connor', 'johnconnor@sky.net', 10, false),
  ];

  sortUsers = this.users.slice();

  getUsers() {
    return this.users;
  }

  // getUsers(criteria: UserSearchCriteria): User[] {
  //   const users = this.sortUsers.slice().sort((a, b) => {
  //     const columnA = a[criteria.sortColumn];
  //     console.log('-->', columnA);
  //     const columnB = b[criteria.sortColumn].toLowerCase();
  //
  //     if (criteria.sortDirection === 'desc') {
  //       return columnA.localeCompare(columnB);
  //     } else {
  //       return columnB.localeCompare(columnA);
  //     }
  //   });
  //
  //   return users;
  // }

  addUser(user: User) {
    this.users.push(user);
  }

  deleteUser(user: User) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}

