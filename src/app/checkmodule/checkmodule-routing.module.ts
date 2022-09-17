import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckmoduleComponent } from './checkmodule.component';

const routes: Routes = [{ path: '', component: CheckmoduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckmoduleRoutingModule { }
