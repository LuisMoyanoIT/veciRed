import { Component, OnInit } from '@angular/core';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { Acuerdos } from '../../interfaces/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-votaciones',
  templateUrl: './votaciones.page.html',
  styleUrls: ['./votaciones.page.scss'],
})
export class VotacionesPage implements OnInit {

  acuerdos: Acuerdos[] = [];
  deshabilitar = false;
  contador = 0;
  acuerdoLanzado: Acuerdos = {};
  emptyVotaciones:boolean = false;

  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  public timeDifference;


  constructor(private acuerdosService: AcuerdosService,
              private navCtrl: NavController) { }

  ngOnInit() {

    //this.scroll();
    this.refresh();

    
    
    //this.acuerdosService.acuerdoEliminado
        //.subscribe( acuerdo => {

          //this.emptyAcuerdos=false;
          //this.refresh();
          //this.acuerdos.unshift(acuerdo);
        //});
  }

  scroll(event?, pull: boolean = false){

    this.acuerdosService.getAcuerdos(pull)
      .subscribe(response => {

        if(pull)
        {
          this.acuerdos = [];
          this.deshabilitar = false;
          this.emptyVotaciones = false;
        }

        for (let index = 0; index < response.acuerdosPublicados.length; index++) {
          //const element = response.acuerdosPublicados[index];

          
          if(response.acuerdosPublicados[index]['estado'] == 2){

            //this.emptyVotaciones=false;

            this.acuerdoLanzado = response.acuerdosPublicados[index];
            
            var duracionMilisegundos = (this.acuerdoLanzado.duracion * this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute);
            var dDay = this.acuerdoLanzado.fechaLanzada + duracionMilisegundos;
            this.timeDifference = dDay - new  Date().getTime();

            if(this.timeDifference < 0){ 

              this.acuerdoLanzado.estado = 3;
              this.acuerdosService.eliminarAcuerdo(this.acuerdoLanzado);
            }
            
            this.acuerdos.push(this.acuerdoLanzado);
          }

        }
        
        /* if(response.acuerdosPublicados[this.contador]['estado'] == 2){

          this.acuerdos.push(response.acuerdosPublicados[this.contador]);
        }
        
        this.contador++; */
       /*
        this.contador++;*/
        if(this.acuerdos.length == 0 && response.pagina === 1)
        {
          this.emptyVotaciones=true;
        }

        if(event)
        {
          event.target.complete();

          if(response.acuerdosPublicados.length===0){
            this.deshabilitar = true;
          }
          
        }
      }).unsubscribe;
  }

  mostrarRegistro(){

    this.navCtrl.navigateRoot('/main/tabs/registros-acuerdos');
  }

  refresh(event?){

    this.scroll(event, true);
    this.acuerdos = [];
    this.deshabilitar = false;
  }

  ionViewWillEnter() {
    this.emptyVotaciones=false;
    this.refresh();
  }

}
