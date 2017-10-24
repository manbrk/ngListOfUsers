export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public email: string;
  public age: number;
  public selected: boolean;

  constructor(id: number, firstName: string, lastName: string, email: string, age: number, selected: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.selected = selected;
  }
}
