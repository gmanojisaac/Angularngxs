import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeforeLoginRoutingModule } from './before-login-routing.module';
import { TaskComponent, 
          TaskListComponent, 
          PureTaskListComponent, 
          ngxsCheckComponent,
          PureInboxScreenComponent } from './before-login.component';

import { AppSharedModule } from '../app-shared/app-shared.module';

import { TasksState } from '../state/task.state';
import { NgxsModule } from '@ngxs/store';


@NgModule({
  declarations: [
    TaskComponent, TaskListComponent, PureTaskListComponent, ngxsCheckComponent, PureInboxScreenComponent
  ],
  imports: [
    CommonModule,
    BeforeLoginRoutingModule,
    AppSharedModule,
    NgxsModule.forFeature([TasksState])
  ]
})
export class BeforeLoginModule { }
