import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Canva1Component } from './canva1/canva1.component';

const routes: Routes = [
  {path: 'canva1', component: Canva1Component},
  {path: 'canva2', component: Canva1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
