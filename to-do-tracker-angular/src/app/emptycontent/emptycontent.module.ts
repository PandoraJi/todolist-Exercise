import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptycontentComponent } from './emptycontent/emptycontent.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: EmptycontentComponent
}];


@NgModule({
  declarations: [
    EmptycontentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EmptycontentModule { }
