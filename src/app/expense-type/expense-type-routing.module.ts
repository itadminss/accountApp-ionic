import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpenseTypePage } from './expense-type.page';

const routes: Routes = [
  {
    path: '',
    component: ExpenseTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseTypePageRoutingModule {}
