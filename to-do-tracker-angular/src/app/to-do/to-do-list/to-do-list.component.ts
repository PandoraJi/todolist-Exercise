import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { ToDoServiceService } from '../to-do-service.service';
import { ToDoTaskModel } from '../to.model';
@Component({
  selector: 'et-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todos: any[] = [];
  todoList!: ToDoTaskModel[] | [];
  leftItems!: any[] | [];
  currentState:string = '';
  masterSelected: boolean =false;
  editTodo: ToDoTaskModel = { id: 0,name:"",description:"",status:false,createdAt:new Date };
  constructor( private todoService: ToDoServiceService) { 

    this.todoService.isTodoItemAddUpdate.subscribe( value => {
     
      if(value)
      {
        this.loadTodo();
      }
  });

  }

  ngOnInit() {
    this.loadTodo();
  }

  public stateName(): string {
    return 'nowShowing';
  }
  
  public getState():string {
    let state=localStorage.getItem(this.stateName());
    if(state!=null)
    return state;
    else
    return "";
  }
  public setState(val:any) {
    localStorage.setItem(this.stateName(), val);
    this.loadTodo();
  }
  public getTodos() {
    this.todoList=[]
    this.todoService.getAll().then((data)=>{
    if(data)
      this.todoList=data;
    });
  }
  
  public activeTodo() {
    this.leftItems = this.todos.filter((todo: ToDoTaskModel) => {
      return todo.status === false;
    });
  }
  public loadTodo() {
    this.editTodo.id=0
    this.todoService.getAll().then((data)=>{
      if(data)
        this.todos=data;
      });
    this.currentState = this.getState();
    console.log(this.currentState);
    this.todoList=[]
    if(this.currentState!=="")
    {
    this.todoList = this.todos.filter((todo: ToDoTaskModel) => {
      switch (this.currentState) {
        case 'Active':
          return todo.status === false;
        case 'Completed':
          return todo.status === true;
        default:
          return todo;
      }
    });
    console.log(this.todoList);
  }else
  {
    this.todoService.getAll().then((data)=>{
      if(data)
      this.todoList=data;
      });
  }
    this.activeTodo();

  }
  
  public hasEditTodo(task:ToDoTaskModel) {
    console.log(task);
    this.editTodo = task;
  }
  public updateTodo(task:ToDoTaskModel) {
    console.log(task);
    return this.todoService.update(task.id,task);
   
  }

  public deleteTodo(task:any) {
    console.log(task);
    return  this.todoService.delete(task.id);
   
  }
  public clearCompleted() {
    return  this.todoService.clearCompleted();
    
  }
  public updateTodoStatus(task:any) {
    console.log(task);
    return  this.todoService.updateTodoStatus(task);
   
  }
  
}