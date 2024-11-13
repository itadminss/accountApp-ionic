/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import {  ReportExpenseService } from '../services/report-expense.service';
 

 interface List {
  date: string;
  name: string;
  amount: string;
}
 
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})

export class ReportPage implements OnInit {
  date1:any
  date2:any
  items:any=[];
  data:any
  sumOfItems:any
  sum:any
  currentItem:any
  constructor(
    private modalController:ModalController,
    private popOverController:PopoverController,
    private alertController:AlertController,
    private reportExpenseService:ReportExpenseService) { }

  ngOnInit() {
    // this.reportExpenseService.get(this.date1,this.date2)
    //   .subscribe(result=>{
    //     this.items = result
    //   })
 
  }
  dismiss(){
    this.modalController.dismiss()
  }
  onChangeDate1(){
    this.popOverController.dismiss()

  }
  onChangeDate2(){
    this.popOverController.dismiss()
  }
  async onSearch()  {
 
    if(this.date1 === undefined ||this.date2 === undefined)  {
      const alert = await this.alertController.create({
        header:'ผิดพลาด',
        message:'เลือกวันที่ให้ครบ',
        buttons:['OK']
      })
      alert.present()
      return
    }
    this.date1 = this.date1.split("T")[0]
    this.reportExpenseService.get (this.date1.split('T')[0],this.date2.split('T')[0])
    .subscribe((data)=>{
      console.log(data)
    this.items =data
    
    this.sumOfItems = data.reduce((sum, currentItem) => {
      const amount = parseFloat(currentItem.amount); // Convert string to number
      if (amount < 0) {
        return sum + amount;
      }
      return sum;
    }, 0);
  });
 

      
      
 

 
  }

}
