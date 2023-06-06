import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IToDo } from 'src/app/Modules/ito-do';
import { ToDoClass } from 'src/app/Modules/to-do-class';
import { TodosService } from 'src/app/Service/todos.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

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
      this.listOfSomethingToDo = res.filter(i => i.completed);
      this.loading = false;
    })
  }

  delete(id?:number){
    this.todoSvc.deleteToDo(id).then((res) => {
      console.log(res);
      this.getToDo();
    })

  }

  change(e:IToDo){
    if(e.completed){
      e.completed = false;
      this.todoSvc.changeTodo(e).then((res)=> this.getToDo())};
  }
}
