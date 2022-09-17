import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxsCheckComponent } from './ngxs-check/ngxs-check.component';

const routes: Routes = [{ path: '', component: NgxsCheckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularngxsRoutingModule { }
