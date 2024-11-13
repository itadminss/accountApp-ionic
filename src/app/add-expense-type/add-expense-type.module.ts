import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddExpenseTypePageRoutingModule } from './add-expense-type-routing.module';

import { AddExpenseTypePage } from './add-expense-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddExpenseTypePageRoutingModule
  ],
  declarations: [AddExpenseTypePage]
})
export class AddExpenseTypePageModule {}
