/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-expense-type',
  templateUrl: './add-expense-type.page.html',
  styleUrls: ['./add-expense-type.page.scss'],
})
export class AddExpenseTypePage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss()
  }

}
