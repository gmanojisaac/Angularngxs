import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckmoduleRoutingModule } from './checkmodule-routing.module';
import { CheckmoduleComponent } from './checkmodule.component';


@NgModule({
  declarations: [
    CheckmoduleComponent
  ],
  imports: [
    CommonModule,
    CheckmoduleRoutingModule
  ]
})
export class CheckmoduleModule { }
