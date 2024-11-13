import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIncomeTypePageRoutingModule } from './add-income-type-routing.module';

import { AddIncomeTypePage } from './add-income-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIncomeTypePageRoutingModule
  ],
  declarations: [AddIncomeTypePage]
})
export class AddIncomeTypePageModule {}
