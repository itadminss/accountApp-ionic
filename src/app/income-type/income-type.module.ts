import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeTypePageRoutingModule } from './income-type-routing.module';

import { IncomeTypePage } from './income-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeTypePageRoutingModule
  ],
  declarations: [IncomeTypePage]
})
export class IncomeTypePageModule {}
