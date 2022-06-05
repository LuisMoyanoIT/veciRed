import { Component, OnInit } from '@angular/core';
import { Solicitud } from 'src/app/interfaces/interfaces';
import { AlertasService } from 'src/app/servicios/alertas.service';
import { SolicitudService } from '../../servicios/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.page.html',
  styleUrls: ['./solicitud.page.scss'],
})
export class SolicitudPage implements OnInit {

  solicitudes: Solicitud[] = [];
  emptySolicitud = false;
  aceptar: any;
  rechazar: any;
  AlertasService: any;

  constructor(private solicitudService: SolicitudService,
              private alertasService: AlertasService) { }

  ngOnInit() {

    this.solicitudService.deletedSolicitud.subscribe(
      respuesta =>
      {
        this.solicitudes = [];
        this.obtenerSolicitudes();

      }
    )
    
  }

  obtenerSolicitudes(event?)
  {
    this.solicitudService.obtenerSolicitudes().subscribe(
      respuesta => {
        //console.log(respuesta['solicitudes']);
        this.solicitudes =respuesta['solicitudes'];
        //console.log(this.solicitudes[0].usuario.nombre);
        if(this.solicitudes.length == 0)
        {
          this.emptySolicitud = true;
          
        }else{
          this.emptySolicitud = false;
          
        }


      }
    )

    if(event)
        {
          event.target.complete();

          
        }

  }

  aceptarVecino(idComunidad, idUsuario, idSolicitud)
  {
    //console.log("asekto" + idComunidad + "user:" +idUsuario);
    var aceptar = {
      idComunidad: idComunidad,
      idUsuario: idUsuario,
      idSolicitud: idSolicitud
    }

    this.alertasService.alertaDecision('¿Desea aceptar a este usuario?').then(
      respuesta =>
      {
         this.aceptar = respuesta['data']
        if(this.aceptar  === true)
        {
          //console.log('entro');
          this.solicitudService.aceptarSolicitud(aceptar);
          this.alertasService.presentToast('Vecino aceptado exitosamente');
              
        }else
        {
          return this.alertasService.presentToast('Operación cancelada');
        }
        

      }
    )
  }


  async rechazoVecino(id)
  {
    var rechazar = {
      idSolicitud: id
    }
    await this.alertasService.alertaDecision('¿Desea rechazar a este usuario?').then(
      respuesta =>
      {
        this.rechazar = respuesta['data'];
        if(this.rechazar === true)
        {
          this.solicitudService.eliminarSolicitudes(rechazar);
          this.alertasService.presentToast('Vecino rechazado exitosamente');
              
        }else{
          this.alertasService.presentToast('Operación cancelada');
        }
        

      }
    )
  
  }


  ionViewWillEnter() {
    this.solicitudes = [];
    this.obtenerSolicitudes();
  }

  refresher(event?)
  {
    this.obtenerSolicitudes(event);
  }

}
