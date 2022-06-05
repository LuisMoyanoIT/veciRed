import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor( private alertController: AlertController,
               private toastController: ToastController) { }

  async alerta(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      message,
      buttons: [{
        text: 'Ok',
        role: 'cancel'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    //console.log('onDidDismiss resolved with role', role);
  }

  async alertaDecision(message: string) {
    let choice;
    const alert = await this.alertController.create({
      backdropDismiss: false,
      message,
      buttons: [
        {
         text: 'ACEPTAR',
          handler: () => {

            alert.dismiss(true);
            return false;
          }
        },
        {
          text: 'Cancelar'
        }
    ]
    });

    await alert.present();
    await alert.onDidDismiss().then((data) => {
        choice = data
    })
    return choice
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      position:'bottom',
      duration: 1800
    });
    toast.present();
  }




}
