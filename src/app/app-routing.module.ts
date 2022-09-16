import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'beforelogin', pathMatch: 'full' },
{ path: 'beforelogin', loadChildren: () => import('./before-login/before-login.module').then(m => m.BeforeLoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
