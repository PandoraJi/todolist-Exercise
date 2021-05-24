import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoCreateComponent } from './to-do-create/to-do-create.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

@NgModule({
  declarations: [
    ToDoCreateComponent,
    ToDoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ToDoModule { }
