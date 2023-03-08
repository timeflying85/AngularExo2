import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'demo', loadChildren : () => import('./modules/demo/demo.module').then(m => m.DemoModule)},
  {path: 'exo', loadChildren : () => import('./modules/exo/exo.module').then(m => m.ExoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
