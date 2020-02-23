import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  // recuperer l'array de user depuis la bdd
  private users: User[];

  constructor() { }

  getUsers() {
    return [...this.users];
  }

  getUser(id: number) {
    return this.users[id];
  }

  addUser(user: User) {
    this.users.push(user);
    // envoyer en bdd
  }

  deleteUser(id: number) {
    this.users.splice(id - 1, 1);
    // delete en bdd
  }
}
