import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import { ToDoTaskModel } from './to.model';

@Injectable({providedIn: 'root'})
export class ToDoServiceService {
 
    public isTodoItemAddUpdate: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor() {
    }

   
    add(todoItem: ToDoTaskModel):String {
     let todoTasks = [];
    if (localStorage.getItem("todoItems") !== null) {
      let listToTask=localStorage.getItem("todoItems");
      if(listToTask)
      todoTasks = JSON.parse(listToTask);
     }
     if(todoTasks)
     {
      todoTasks.push(todoItem);
     }
      localStorage.setItem('todoItems', JSON.stringify(todoTasks));
      this.isTodoItemAddUpdate.next(true);
      return "sucess";
    }

    getAll():Promise<ToDoTaskModel[]> {
      let todoTasks: ToDoTaskModel[] = [];
      return new Promise((resolve, reject) => {
        try {
      if (localStorage.getItem("todoItems") !== null) {
        let listToTask=localStorage.getItem("todoItems");
        if(listToTask)
        todoTasks=JSON.parse(listToTask);
       }
       resolve(todoTasks);
    } catch (error) {
      reject(todoTasks);
    }
  });
    }

    getById(id: number):Promise<ToDoTaskModel> {
      let todoTasks: ToDoTaskModel[] = [];
      let todoItem = new ToDoTaskModel();
      return new Promise((resolve, reject) => {
        try {
    
       this.getAll().then((data)=>{
        if(data)
        {
          
          todoTasks=data;
        let todoItemtask=todoTasks.filter(x=>x.id===id);
       if(todoItemtask)
       {
        todoItem=todoItemtask[0];
       }
       resolve(todoItem);
         } 
        


       });
      }catch (error) {
        reject(todoItem);
      }


        
    });
          }

    update(id: number, todoItem: ToDoTaskModel):String {
      console.log(todoItem);
      if(todoItem)
      {
        let todoTasks : ToDoTaskModel[] = [];
        this.getAll().then((data)=> {
            if (data) {
              todoTasks = data;
              if (todoItem) {
                let todoItemtask = todoTasks.findIndex(x => x.id === id);
                if (~todoItemtask) {
                  todoTasks[todoItemtask] = todoItem;
                  localStorage.setItem('todoItems', JSON.stringify(todoTasks));
                  this.isTodoItemAddUpdate.next(true);
                  return "sucess";
                }
                return "Unsuccessfull";
              }
              return "Unsuccessfull";
            }
            else {
              return "Unsuccessfull";
            }
          });
      }
      return "Unsuccessfull";
    }

    delete(id:number):string
    {
      console.log(id);
      let todoTasks : ToDoTaskModel[] = [];
      this.getAll().then((data)=> {
        if (data) {
          todoTasks = data;
          let todoItemtask=todoTasks.findIndex(x=>x.id===id);
          if (~todoItemtask)
          {
          todoTasks.splice(todoItemtask, 1);
          localStorage.setItem('todoItems', JSON.stringify(todoTasks));
          this.isTodoItemAddUpdate.next(true);
          }
        }
      });
      return "deleted";
    }
    clearCompleted():string
    {

      
      let todoTasks : ToDoTaskModel[] = [];
      this.getAll().then((data)=> {
        if (data) {
          todoTasks = data;
        todoTasks.filter((x) => {
        return x.status === true;
      }).forEach(x => todoTasks.splice(todoTasks.indexOf(x), 1));
       if(todoTasks)
       {
       console.log(todoTasks);

      localStorage.setItem('todoItems', JSON.stringify(todoTasks));
      this.isTodoItemAddUpdate.next(true);
      }
    }
     });
     return "cleared";
    }
    updateTodoStatus(task:ToDoTaskModel):string
    {
      console.log(task);

      let todoTasks : ToDoTaskModel[] = [];
      this.getAll().then((data)=> {
        if (data) {
          todoTasks = data;
          todoTasks.forEach((element: any) => {
        if (element.id === task.id) {
          element.status = !element.status;
        }
        localStorage.setItem('todoItems', JSON.stringify(todoTasks));
        this.isTodoItemAddUpdate.next(true);
        
      });
      return "statusupdated";
    }else return "status-not-updated";
    });
    return "status-not-updated";
    }
}
