import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-aviso-modal',
  templateUrl: './aviso-modal.component.html',
  styleUrls: ['./aviso-modal.component.scss'],
})
export class AvisoModalComponent  {

  constructor(private modalController: ModalController) { }

  closeModal()
  {
    this.modalController.dismiss()

  }

}
