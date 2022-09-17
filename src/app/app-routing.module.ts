import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'check', pathMatch: 'full' },
{ path: 'ngxs', loadChildren: () => import('./angularngxs/angularngxs.module').then(m => m.AngularngxsModule) },
{ path: 'check', loadChildren: () => import('./checkmodule/checkmodule.module').then(m => m.CheckmoduleModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
