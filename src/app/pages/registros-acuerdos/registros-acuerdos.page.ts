import { Component, OnInit } from '@angular/core';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { Acuerdos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-registros-acuerdos',
  templateUrl: './registros-acuerdos.page.html',
  styleUrls: ['./registros-acuerdos.page.scss'],
})
export class RegistrosAcuerdosPage implements OnInit {

  acuerdos: Acuerdos[] = [];
  deshabilitar = false;
  acuerdoTerminado: Acuerdos = {};
  emptyAcuerdos:boolean = false;

  constructor(private acuerdosService: AcuerdosService) { }

  ngOnInit() {

    this.refresh();
  }

  scroll(event?, pull: boolean = false){

    this.acuerdosService.getAcuerdos(pull)
      .subscribe(response => {
       

        if(pull)
        {
          this.acuerdos = [];
          this.deshabilitar = false;
        }

        for (let index = 0; index < response.acuerdosPublicados.length; index++) {


          if(response.acuerdosPublicados[index]['estado'] == 3){
            //this.emptyAcuerdos = false;
            this.acuerdoTerminado = response.acuerdosPublicados[index];
            this.acuerdos.push(this.acuerdoTerminado);
          }

        }

        if(this.acuerdos.length == 0 && response.pagina === 1)
        {
          this.emptyAcuerdos=true;
        }
        
        if(event)
        {
          event.target.complete();

          if(response.acuerdosPublicados.length===0){
            this.deshabilitar = true;
          }
          
        }
      });
  }

  refresh(event?){

    this.scroll(event, true);
    this.acuerdos = [];
    this.deshabilitar = false;
  }

  ionViewWillEnter() {
    
    this.emptyAcuerdos = false;
    this.refresh();
  }

}
