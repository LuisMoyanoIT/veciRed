import { ApplicationRef, Component, OnInit } from '@angular/core';
import { OSNotification } from 'onesignal-cordova-plugin/types/Notification';
import { Comunidad, Usuario } from 'src/app/interfaces/interfaces';
import { ComunidadService } from 'src/app/servicios/comunidad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { PushService } from '../../servicios/push.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  mensajes: OSNotification[] = [];
  deshabilitar: boolean = false;
  Comunidad: Comunidad[] = [];
  Idcomunidad = '';
  usuario: Usuario = {};
  emptyNotificaciones = false;

  constructor(private pushService: PushService,
              private applicationRef: ApplicationRef,
              private comunidadService: ComunidadService,
              private usuarioService: UsuarioService) {}

  ngOnInit() {

    this.scroll();

      //Se subscribe al puchListener para insertar las nuevas notificaciones
      this.pushService.pushListener.subscribe( noti => {
        this.emptyNotificaciones = false;
        this.mensajes.unshift(noti);
        //Reinicia el ciclo de detección de cambios en angular al agregar la variable al arreglo
        this.applicationRef.tick();
      });
  }

  //Se ejecuta cada vez que esta página es cargada
  /* async ionViewWillEnter(){

    

    //Se cargan los mensajes desde el servicio 
    this.mensajes = await this.pushService.getMensajes();
  } */

  refresh( event ) {

    this.scroll( event, true );
    this.deshabilitar = false;
    this.mensajes = [];

  }

  async scroll( event?, pull: boolean = false ) {

    this.emptyNotificaciones = false;
    var mensajesPaginados = await this.pushService.getMensajes(pull);
    this.mensajes.push(...mensajesPaginados);

    if(mensajesPaginados.length === 0)
    {
      this.emptyNotificaciones=true;
    }

    if( event ){
      event.target.complete();

      if(mensajesPaginados.length === 0){
        this.deshabilitar = true;
        
      }
    }
  }

}
