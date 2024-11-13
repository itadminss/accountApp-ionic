/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { IncometypeService } from '../services/incometype.service';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.page.html',
  styleUrls: ['./add-income.page.scss'],
})
export class AddIncomePage implements OnInit {

  constructor(
    private modalController:ModalController,
    private popOverController:PopoverController,
    private incometypeService : IncometypeService,
    private incomeService:IncomeService) { }
  date:any
  items:any
  incometypeid:any
  amount:any
  data:any
  ngOnInit() {
    this.incometypeService.get()
      .subscribe(result=>{
        this.items = result
        // console.log(result)
        
      })
  }
  dismiss(){
    this.modalController.dismiss()
  }
  async onChange(){
    console.log(this.date)
    await this.popOverController.dismiss()

  }
  async onSave(){
    const incomedate =this.date.split('T')[0]
    const incometime =this.date.split('T')[1]
    const amount =this.amount
    const incometypeid = this.incometypeid
     this.incomeService.post({incometypeid,amount,incomedate})
          .subscribe(result=>{
            console.log(result)
         
          })
          this.dismiss()
          this.ngOnInit()
    // console.log(incomedate)
    // console.log(this.incometypeid+' '+this.date)
  }
 
  // datValue:any
  // get date():any{
  //   return this.datValue
  // }
  // set date(value:any){
  //   this.datValue=value
  // }

}
