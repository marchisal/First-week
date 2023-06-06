import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToDo } from 'src/app/Modules/ito-do';
import { ToDoClass } from 'src/app/Modules/to-do-class';
import { TodosService } from 'src/app/Service/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  listOfSomethingToDo:IToDo[] = [];
  text:string = "";
  loading:boolean = true;
  somethingToDo:ToDoClass = new ToDoClass("", false);

  constructor(private todoSvc:TodosService, private router:Router){}

  ngOnInit(){
    this.getToDo();
  }

  getToDo(){
    this.todoSvc.getToDo().then((res) =>{
      this.listOfSomethingToDo = res.filter(i => !i.completed);
      this.loading = false;
    })
  }

  create(){
    this.todoSvc.createTodo(this.somethingToDo).then((res) => {
      console.log(res);
      this.getToDo();
      this.text = ""
    }
    )
  }

  delete(id?:number){
    this.todoSvc.deleteToDo(id).then((res) => {
      console.log(res);
      this.getToDo();
    })

  }

  change(e:IToDo){
    if(!e.completed){
      e.completed = true;
      this.todoSvc.changeTodo(e).then((res)=> this.getToDo())};
  }
}
