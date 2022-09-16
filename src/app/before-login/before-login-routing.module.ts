import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ngxsCheckComponent } from './before-login.component';

const routes: Routes = [{ path: '', component: ngxsCheckComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforeLoginRoutingModule { }
