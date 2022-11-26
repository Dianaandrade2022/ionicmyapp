import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  counter: number = 0;
  constructor(private alertController: AlertController) {
  }
  async tapCounter(){
    if(this.counter>=10){
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Limite',
        message: 'Excedio el número de clicks',
        buttons: ['Ok'],
      });
      await alert.present();
      this.counter=0;
    }else{
      this.counter++;
    }
  }
}
