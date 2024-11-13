import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseTypePageRoutingModule } from './expense-type-routing.module';

import { ExpenseTypePage } from './expense-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseTypePageRoutingModule
  ],
  declarations: [ExpenseTypePage]
})
export class ExpenseTypePageModule {}
