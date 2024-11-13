/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ExpenseService } from '../services/expense.service';
import { ExpensetypeService } from '../services/expensetype.service';
 
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.page.html',
  styleUrls: ['./add-expense.page.scss'],
})
export class AddExpensePage implements OnInit {
  
  items:any
  expensetypeid:any
  amount:any
  data:any
  date:any
  constructor(
    private modalController:ModalController,
    private popOverController:PopoverController,
    private expensetypeService:ExpensetypeService,
    private expenseService:ExpenseService,
   
    )  { }
  ngOnInit() {
    this.expensetypeService.get()
      .subscribe(result=>{
        this.items = result
        console.log(result)
        
      })
  }
 

  dismiss(){
    this.modalController.dismiss()
  }
  async onChange(){
    await this.popOverController.dismiss()

  }
  async onSave(){
    const expensedate =this.date.split('T')[0]
    // const expensetime =this.date.split('T')[1]
    const amount =this.amount
    const expensetypeid = this.expensetypeid
     this.expenseService.post({expensetypeid,amount,expensedate})
          .subscribe(result=>{
            console.log(result)
           
          })
          this.dismiss()
         
          
          
          
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
