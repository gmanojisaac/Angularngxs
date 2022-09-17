import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularngxsRoutingModule } from './angularngxs-routing.module';
import { AngularngxsComponent } from './angularngxs.component';
import { TaskComponent } from './task/task.component';
import { PureTaskListComponent } from './pure-task-list/pure-task-list.component';
import { TaskListComponent } from './task-list/task-list.component';
import { PureInboxScreenComponent } from './pure-inbox-screen/pure-inbox-screen.component';
import { NgxsCheckComponent } from './ngxs-check/ngxs-check.component';

import { TasksState } from '../state/task.state';
import { NgxsModule } from '@ngxs/store';


@NgModule({
  declarations: [
    AngularngxsComponent,
    TaskComponent,
    PureTaskListComponent,
    TaskListComponent,
    PureInboxScreenComponent,
    NgxsCheckComponent
  ],
  imports: [
    CommonModule,
    AngularngxsRoutingModule,
    NgxsModule.forFeature([TasksState])
  ]
})
export class AngularngxsModule { }
