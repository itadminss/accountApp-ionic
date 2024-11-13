/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddIncomePage } from '../add-income/add-income.page';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {

  constructor(
    private modalController:ModalController,
    private incomeService:IncomeService,
    private alertController:AlertController,
    ) { }
  data:any
  ngOnInit() {
    this.incomeService.get()
        .subscribe(result=>{
          console.log(result)
          this.data = result
        })
  }
  dismiss(){
    this.modalController.dismiss()
  }
  async addIncomeModal(){
    const modal = await this.modalController.create({
      component:AddIncomePage
    })
    modal.present()
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
    
    
  }

  async onEdit(item:any){
    console.log(item.incomedate)
    const alert = await this.alertController.create({
      header: 'แก้ไขข้อมูล',
      inputs: [
        {
          name: 'incomeid',
 
          value: item.incomeid,
        },
        {
          name: 'incomedate',
 
          value: item.incomedate,
          type:'date',
        } ,
        {
          name: 'incometype',
 
          value: item.incometype,
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
           
            item.incomeid = data.incomeid;
            // item.incometypeid = data.incometypeid;
            item.incomedate = data.incomedate;
            item.amount = data.amount;
            console.log(item);
            this.incomeService.put(item).subscribe((result) => {
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
      message: 'ต้องการลบข้อมูล วันที่ ' +item.incomedate+' '+ item.incometype + ''+item.amount+' ใช่หรือไม่',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.incomeService
              .delete(item.incomeid)
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

    alert.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }

}
