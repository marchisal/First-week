import { Injectable } from '@angular/core';
import { IToDo } from '../Modules/ito-do';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl:string = "http://localhost:3000/Todosmoltecose"

  constructor() {}

  getToDo():Promise<IToDo[]> {
    return fetch(this.apiUrl).then(res => res.json())
  }

  getOneToDo(id:number):Promise<IToDo> {
    return fetch(this.apiUrl+ '/' + id,).then(res => res.json())
  }

  createTodo(element:IToDo):Promise<IToDo> {
    return fetch(this.apiUrl, {
      method: "post",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(element)
    })
    .then(res => res.json())
  }

  changeTodo(element:IToDo):Promise<IToDo> {
    return fetch(this.apiUrl+ '/' + element.id, {
      method: "put",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(element)
    })
    .then(res => res.json())
  }

  deleteToDo(id:number = 0):Promise<IToDo> {
    return fetch(this.apiUrl+ '/' + id,{
      method: "delete"
    })
    .then(res => res.json())
  }

}
