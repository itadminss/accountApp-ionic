/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddExpensePage } from '../add-expense/add-expense.page';
import { ExpenseService } from '../services/expense.service';
 
@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {



  constructor(
    private modalController:ModalController,
    private expenseService:ExpenseService,
    private alertController:AlertController) { }
    data:any
  ngOnInit() {
    this.expenseService.get()
    .subscribe(result => {
      this.data = result;
      console.log(this.data);
    })
  }
  dismiss(){
    this.modalController.dismiss()
  }
  async addExpenseModal(){
    const modal = await this.modalController.create({
      component:AddExpensePage
    })
    modal.present()
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
     
  }
  async onEdit(item:any){
    console.log(item.expensedate)
    const alert = await this.alertController.create({
      header: 'แก้ไขข้อมูล',
      inputs: [
        {
          name: 'expenseid',
 
          value: item.expenseid,
        },
        {
          name: 'expensedate',
 
          value: item.expensedate,
          type:'date',
        } ,
        {
          name: 'expensetype',
 
          value: item.expensetype,
        },
        {
          name: 'amount',
 
          value: item.amount,
        }
        
     
      ],
 
      
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
           
            item.expenseid = data.expenseid;
            // item.expensetypeid = data.expensetypeid;
            item.expensedate = data.expensedate;
            item.amount = data.amount;
            console.log(item);
            this.expenseService.put(item).subscribe((result) => {
              console.log(result);
              // this.dismiss()
              // this.ngOnInit();
              
             
              
            });
            
          },
        },
      ],
    });
    alert.present();
    alert.onDidDismiss().then(() => {
      this.ngOnInit();
    });
   
     
   

  }
  async onDelete(item:any){
    const alert = await this.alertController.create({
      header: 'ลบข้อมูล',
      message: 'ต้องการลบข้อมูล วันที่ ' +item.expensedate+' '+ item.expensetype + ''+item.amount+' ใช่หรือไม่',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.expenseService
              .delete(item.expenseid)
              .subscribe((result) => {
                console.log(result);
                // this.ngOnInit();
                // this.dismiss()
              });
          },
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
    alert.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }

}
