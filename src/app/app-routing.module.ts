import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const routes: Routes = [
  {
    path: 'comp1',
    component: Comp1Component,
    data: { info: 'Data from Comp1' }
  },
  {
    path: 'comp2',
    component: Comp2Component,
    data: { info: 'Data from Comp2' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
