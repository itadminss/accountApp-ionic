import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'income',
    loadChildren: () => import('./income/income.module').then( m => m.IncomePageModule)
  },
  {
    path: 'expense',
    loadChildren: () => import('./expense/expense.module').then( m => m.ExpensePageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'income-type',
    loadChildren: () => import('./income-type/income-type.module').then( m => m.IncomeTypePageModule)
  },
  {
    path: 'expense-type',
    loadChildren: () => import('./expense-type/expense-type.module').then( m => m.ExpenseTypePageModule)
  },
  {
    path: 'add-income-type',
    loadChildren: () => import('./add-income-type/add-income-type.module').then( m => m.AddIncomeTypePageModule)
  },
  {
    path: 'add-expense-type',
    loadChildren: () => import('./add-expense-type/add-expense-type.module').then( m => m.AddExpenseTypePageModule)
  },
  {
    path: 'add-income',
    loadChildren: () => import('./add-income/add-income.module').then( m => m.AddIncomePageModule)
  },
  {
    path: 'add-expense',
    loadChildren: () => import('./add-expense/add-expense.module').then( m => m.AddExpensePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
