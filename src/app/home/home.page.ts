import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IncomePage } from '../income/income.page';
import { ExpensePage } from '../expense/expense.page';
import { ReportPage } from '../report/report.page';
import { IncomeTypePage } from '../income-type/income-type.page';
import { ExpenseTypePage } from '../expense-type/expense-type.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController:ModalController,
    ) {}
  async openIncomeModal(){
    const modal = await this.modalController.create({
      component:IncomePage
    })
    modal.present()
  }
  async openExpenseModal(){
    const modal = await this.modalController.create({
      component:ExpensePage
    })
    modal.present()
  }
  async openReportModal(){
    const modal = await this.modalController.create({
      component:ReportPage
    })
    modal.present()
  }

  async openIncomeTypeModal(){
    const modal = await this.modalController.create({
      component:IncomeTypePage
    })
    modal.present()

  }
  async openExpenseTypeModal(){
    const modal = await this.modalController.create({
      component:ExpenseTypePage
    })
    modal.present()

  }
 

}
