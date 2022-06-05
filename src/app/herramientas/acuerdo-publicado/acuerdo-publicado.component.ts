import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DatePipe  } from '@angular/common';
import { Acuerdos } from '../../interfaces/interfaces';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { AlertasService } from '../../servicios/alertas.service';
import { PushService } from '../../servicios/push.service';

@Component({
  selector: 'app-acuerdo-publicado',
  templateUrl: './acuerdo-publicado.component.html',
  styleUrls: ['./acuerdo-publicado.component.scss'],
})
export class AcuerdoPublicadoComponent implements OnInit {

  @Input() acuerdoPublicado: Acuerdos = {
    
    titulo:'',
    descripcion:'',
    fecha:null,
    hora:null,
    duracion:null,
    imagenAcuerdo: [],
    opciones: {},
    comunidad: {},
    usuario: {}
  };
  ocultar: boolean = true;
  fechaFormateada = null;

  constructor(private acuerdosService: AcuerdosService,
              private navCtrl: NavController,
              private alertasService: AlertasService,
              private pushService: PushService) { }

  ngOnInit() {

    if(this.acuerdoPublicado.estado == 1){
      this.ocultar = true;   
    }else if(this.acuerdoPublicado.estado == 2){
      this.ocultar = false;
    }

    this.formatearFecha();
   
  }

  abrirEditar(){
    

    this.acuerdosService.enviarDatos(this.acuerdoPublicado, true);
    //this.router.navigate(['/main/tabs/crear-acuerdo']);
    this.navCtrl.navigateRoot('/main/tabs/editar-acuerdo');
  }

  async eliminar(){

    await this.alertasService.alertaDecision('¿Desea eliminar este acuerdo?').then( respuesta => {

      if(respuesta['data'] === true){

        this.acuerdoPublicado.estado = 0;
        this.acuerdosService.eliminarAcuerdo(this.acuerdoPublicado);
        this.alertasService.presentToast('Votación eliminada exitosamente');
      }/* else{

        
      } */
    })
  }

  async lanzarVotacion(){

    await this.alertasService.alertaDecision('¿Desea dar comienzo a esta votación?').then( respuesta => {

      if(respuesta['data'] === true){

        var lanzamiento = new Date().getTime();
        this.acuerdoPublicado.fechaLanzada = lanzamiento;
        this.acuerdoPublicado.estado = 2;
        this.acuerdosService.eliminarAcuerdo(this.acuerdoPublicado);
        this.alertasService.presentToast('Votación lanzada exitosamente');
        this.pushService.enviarNotificacion(this.acuerdoPublicado.titulo, this.acuerdoPublicado.descripcion);
      }/* else{

      } */
    })
  }

  async terminar(){

    await this.alertasService.alertaDecision('¿Desea que se de termino a la votación?').then( respuesta => {

      if(respuesta['data'] === true){

        this.acuerdoPublicado.estado = 3;
        this.acuerdosService.eliminarAcuerdo(this.acuerdoPublicado);
        this.alertasService.presentToast('Votación terminada exitosamente');
      }/* else{

      } */
    })
  }

  formatearFecha(){
    
    const datepipe: DatePipe = new DatePipe('en-US');
    let fecha = new Date(this.acuerdoPublicado.fecha);

    let days = ['Lunes','Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    var diaSemana = days[fecha.getUTCDay()-1];

    this.fechaFormateada = diaSemana + datepipe.transform(this.acuerdoPublicado.fecha,', dd-MM-YYYY');
  }
}
