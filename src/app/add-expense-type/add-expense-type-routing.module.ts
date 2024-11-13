import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddExpenseTypePage } from './add-expense-type.page';

const routes: Routes = [
  {
    path: '',
    component: AddExpenseTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddExpenseTypePageRoutingModule {}
