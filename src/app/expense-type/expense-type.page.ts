/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddExpenseTypePage } from '../add-expense-type/add-expense-type.page';
import { ExpensetypeService } from '../services/expensetype.service';

@Component({
  selector: 'app-expense-type',
  templateUrl: './expense-type.page.html',
  styleUrls: ['./expense-type.page.scss'],
})
export class ExpenseTypePage implements OnInit {
data:any
expensetype:any
  constructor(private modalController:ModalController,private alertController: AlertController,
    private expensetypeService:ExpensetypeService) { }

  ngOnInit() {
    this.expensetypeService.get()
    .subscribe((result)=>{
      this.data = result
      console.log(this.data)
    })
  }
  dismiss(){
    this.modalController.dismiss()
  }
  async openAddExpenseTypeModal(){
    const modal = await this.modalController.create({
      component:AddExpenseTypePage
    })
    modal.present()
  }
  async onEdit(item: any) {
    // console.log(item)
    const alert = await this.alertController.create({
      header: 'แก้ไขข้อมูล',
      inputs: [
        {
          name: 'expensetype',
          value: item.expensetype,
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            console.log(data);
            item.expensetype = data.expensetype;
            this.expensetypeService.put(item).subscribe((result) => {
              console.log(result);
              this.ngOnInit();
            });
          },
        },
      ],
    });
    alert.present();
  }
  async onDelete(item: any) {
    const alert = await this.alertController.create({
      header: 'ลบข้อมูล',
      message: 'ต้องการลบข้อมูล' + item.expensetype + 'ใช่หรือไม่',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.expensetypeService
              .delete(item.expensetypeid)
              .subscribe((result) => {
                console.log(result);
                this.ngOnInit();
              });
          },
        },
        {
          text: 'No',
        },
      ],
    });
    alert.present();
  }

  async openAddExpenseTypeAlert(){
    const alert = await this.alertController.create({
      header: 'ป้อนประเภทรายจ่าย',
 
      buttons: [{text:'OK',
      handler: (data) => {
        console.log(data);
        this.expensetype = data;

        this.expensetypeService.post(this.expensetype).subscribe((result) => {
          console.log(result);
        });
      },
    }],
      inputs:[  {
        name:'expensetype',
        placeholder: 'ประเภทรายจ่าย',
      }],
  
    });

    await alert.present();
    alert.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }
  }


 
