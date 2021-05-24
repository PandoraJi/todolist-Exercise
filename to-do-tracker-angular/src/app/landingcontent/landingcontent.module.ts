import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingContentComponent } from './landing-content/landing-content.component';
import { ToDoListComponent } from '../to-do/to-do-list/to-do-list.component';
import { ToDoCreateComponent } from '../to-do/to-do-create/to-do-create.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    LandingContentComponent,
    ToDoListComponent,ToDoCreateComponent
  ],
  imports: [
    CommonModule, MatDialogModule, MatSelectModule,
    MatInputModule,MatIconModule,MatCardModule,
    MatButtonModule, FormsModule, ReactiveFormsModule,MatCheckboxModule,
    MatFormFieldModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: LandingContentComponent }]),
  ]
})
export class LandingcontentModule { }
