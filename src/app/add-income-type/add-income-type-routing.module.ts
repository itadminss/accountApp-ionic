import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIncomeTypePage } from './add-income-type.page';

const routes: Routes = [
  {
    path: '',
    component: AddIncomeTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIncomeTypePageRoutingModule {}
