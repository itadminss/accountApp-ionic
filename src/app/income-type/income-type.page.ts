/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AddIncomeTypePage } from '../add-income-type/add-income-type.page';
import { IncometypeService } from '../services/incometype.service';

@Component({
  selector: 'app-income-type',
  templateUrl: './income-type.page.html',
  styleUrls: ['./income-type.page.scss'],
})
export class IncomeTypePage implements OnInit {
  data: any;
  incometype: any;
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private incometypeService: IncometypeService
  ) {}

  ngOnInit() {
    this.incometypeService.get().subscribe((result) => {
      this.data = result;
      console.log(this.data);
    });
  }
  dismiss() {
    this.modalController.dismiss();
  }
  async openAddIncomeTypeModal() {
    const modal = await this.modalController.create({
      component: AddIncomeTypePage,
    });
    await modal.present();
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
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

  async openAddIncomeTypeAlert() {
    const alert = await this.alertController.create({
      header: 'ป้อนประเภทรายรับ',

      buttons: [
        {
          text: 'OK',
          handler: (data) => {
            console.log(data);
            this.incometype = data;

            this.incometypeService.post(this.incometype).subscribe((result) => {
              console.log(result);
            });
          },
        },
      ],
      inputs: [
        {
          name: 'incometype',
          placeholder: 'ประเภทรายรับ',
        },
      ],
    });
    await alert.present();
    alert.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }
}
