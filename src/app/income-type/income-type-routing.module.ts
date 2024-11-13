import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeTypePage } from './income-type.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeTypePageRoutingModule {}
