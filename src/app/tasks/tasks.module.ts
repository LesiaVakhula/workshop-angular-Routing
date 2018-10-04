import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksRoutingModule } from './tasks-routing.module';
import { TaskListComponent, TaskComponent, TaskFormComponent } from '.';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    FormsModule
  ],
  declarations: [TaskListComponent, TaskComponent, TaskFormComponent]
})
export class TasksModule { }
