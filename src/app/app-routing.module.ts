import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo: 'ngxs', pathMatch: 'full' },
{ path: 'ngxs', loadChildren: () => import('./angularngxs/angularngxs.module').then(m => m.AngularngxsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
