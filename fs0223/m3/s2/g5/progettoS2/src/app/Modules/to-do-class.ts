import { IToDo } from "./ito-do";

export class ToDoClass implements IToDo {

  id?: number;
  title: string;
  completed: boolean

  constructor(title:string, completed:boolean, id?:number){
  this.id = id,
  this.title = title,
  this.completed = completed
}
}
