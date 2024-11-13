/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IncometypeService } from '../services/incometype.service';

@Component({
  selector: 'app-add-income-type',
  templateUrl: './add-income-type.page.html',
  styleUrls: ['./add-income-type.page.scss'],
})
export class AddIncomeTypePage implements OnInit {
incometype:any
  constructor(private modalController:ModalController,
    private incometypeService :IncometypeService ,private alertController:AlertController) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss()
  }
  onSave(){
    const incometype = this.incometype
   this.incometypeService.post({incometype})
      .subscribe(result=>{
        console.log(result)
      })
      this.dismiss()
      
  }

  async onEdit(item: any) {
    // console.log(item)
    const alert = await this.alertController.create({
      header: 'แก้ไขข้อมูล',
      inputs: [
        {
          name: 'incometype',
          value: item.incometype,
        },
      ],
      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            console.log(data);
            item.incometype = data.incometype;
            this.incometypeService.put(item).subscribe((result) => {
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
      message: 'ต้องการลบข้อมูล' + item.incometype + 'ใช่หรือไม่',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.incometypeService
              .delete(item.incometypeid)
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
  


}
