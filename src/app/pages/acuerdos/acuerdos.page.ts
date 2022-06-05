import { Component, OnInit } from '@angular/core';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { Acuerdos } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acuerdos',
  templateUrl: './acuerdos.page.html',
  styleUrls: ['./acuerdos.page.scss'],
})
export class AcuerdosPage implements OnInit {

  acuerdos: Acuerdos[] = [];
  emptyAcuerdos:boolean = false;
  deshabilitar: boolean = false;
  acuerdosCreadosLanzados: Acuerdos = {};

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;



  constructor(private acuerdosService: AcuerdosService,
              private navCtrl :NavController) { }

  ngOnInit() {

    this.scroll();
    //this.refresh();

    this.acuerdosService.nuevoAcuerdo
        .subscribe( acuerdo => {

          this.emptyAcuerdos=false;

          this.acuerdos.unshift(acuerdo);
        });

    this.acuerdosService.acuerdoEliminado
        .subscribe( acuerdo => {

          //this.emptyAcuerdos=false;
          //this.scroll();
          this.refresh();
          //this.acuerdos.unshift(acuerdo);
        });    

  }

  scroll(event?, pull: boolean = false){

    this.acuerdosService.getAcuerdos(pull)
      .subscribe(response => {

        if(pull)
        {
          this.acuerdos = [];
          this.deshabilitar = false;
          this.emptyAcuerdos=false;
        }
        

        for (let index = 0; index < response.acuerdosPublicados.length; index++) {

          if(response.acuerdosPublicados[index]['estado'] == 1 || response.acuerdosPublicados[index]['estado'] == 2 ){
            
            this.acuerdosCreadosLanzados = response.acuerdosPublicados[index];
            //this.emptyAcuerdos=false;

            if(this.acuerdosCreadosLanzados.estado == 2){

              var duracionMilisegundos = (this.acuerdosCreadosLanzados.duracion * this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute);
              var dDay = this.acuerdosCreadosLanzados.fechaLanzada + duracionMilisegundos;
              this.timeDifference = dDay - new  Date().getTime();
  
              if(this.timeDifference < 0){ 
  
                this.acuerdosCreadosLanzados.estado = 3;
                this.acuerdosService.eliminarAcuerdo(this.acuerdosCreadosLanzados);
              }
            }
  
            this.acuerdos.push(this.acuerdosCreadosLanzados);
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

    this.emptyAcuerdos=false;
    this.refresh();
  }

}
