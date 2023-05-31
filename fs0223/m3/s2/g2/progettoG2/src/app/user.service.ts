import { Injectable } from '@angular/core';
import { User } from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiJson:string = "assets/db.json"

  allUsers:User[] = [];

  constructor() {

  }

  getAllUsers():Promise<User[]>{
    return fetch(this.apiJson).then(res => res.json())
  }
}
