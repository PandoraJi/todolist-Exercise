import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoServiceService } from '../to-do-service.service';
import { ToDoTaskModel } from '../to.model';

@Component({
  selector: 'et-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css']
})
export class ToDoCreateComponent implements OnInit {
  randomid:0 | undefined;
  newTodo=new ToDoTaskModel();
  constructor( private todoService: ToDoServiceService) { 
    this.todoService.isTodoItemAddUpdate.subscribe( value => {
      if(value)
      {
        this.todoService.getAll().then((data)=>{
          if(data)
          {
            this.newTodo.id= data.length;
          }
        });

      }
  });
}

  ngOnInit(): void {
    this.todoService.getAll().then((data)=>{
      if(data)
      {
        this.newTodo.id= data.length;
      }
    });
    
  }

  public addTodo(todoForm: NgForm) {
    const todo = todoForm.value;
    if(todo.name!=undefined && todo.description!=undefined )
    {
    this.newTodo.status= false;
    if(this.newTodo.id===0)this.newTodo.id= Math.random();
    this.newTodo.createdAt= new Date;
    let result= this.todoService.add(this.newTodo);
      this.newTodo=new ToDoTaskModel();
      return result;
 
    }
    else{
       return null;
    }
  
}
}
