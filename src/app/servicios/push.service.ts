import { EventEmitter, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import OneSignal from 'onesignal-cordova-plugin';
import { Router } from '@angular/router';
import { OSNotification } from 'onesignal-cordova-plugin/types/Notification';
import { UsuarioService } from './usuario.service';
import { Platform } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class PushService {
  //OSNotification
  mensajes: OSNotification[] = [];
  //Array que guarda las comunidades
  //arrayComunidades = [];
  paginaMensajes = 0;
  usuario: Usuario = {};

  usuariosComunidad: Usuario[] = [];

  //userId: Array<string> = [];
  userId: any = [];
  
  //Se crea un observable para las nuevas notificaciones
  pushListener =  new EventEmitter<OSNotification>();
  pagMen: any[] = [];

  
  notificacion = {
    app_id: "971b279e-dd53-47c9-9c33-286653e8243d",
    contents: { en: "Englis message from Postman", es: ""},
    headings: { es: ""},
    include_external_user_ids: [],
    small_icon: "/drawable/small_icon"
  }

  constructor(private platform: Platform,
              private storage: Storage,
              private router: Router,
              private usuarioService: UsuarioService,
              private http: HttpClient) { 
                this.cargarMensajes();
              }

  
  
  OneSignalInit(){

    if(this.platform.is('capacitor')){

      OneSignal.setAppId("971b279e-dd53-47c9-9c33-286653e8243d");
      
      OneSignal.setNotificationWillShowInForegroundHandler(async (notificacion) => {
        await this.notificacionRecibida(notificacion.getNotification());
      
        //La notificacion llega de inmediato
        notificacion.complete(notificacion.getNotification());
        
      });

      OneSignal.setNotificationOpenedHandler(async (notificacion) => {
        var noti = JSON.stringify(notificacion.notification);
        await this.notificacionRecibida(notificacion.notification);
        this.router.navigate(['/main/tabs/tab2']);
        
      });

      //Obtener ID del suscriptor
      /* OneSignal.getDeviceState((stateChanges) => {
        this.userId = stateChanges.userId;

      }); */

    }else{
      //console.log('No es movil');
    }

  }

  async notificacionRecibida(notificacion: OSNotification){

    //Se asegura que los mensajes estén cargados
    await this.cargarMensajes();

    const  existePush = this.mensajes.find( mensaje => mensaje.notificationId === notificacion.notificationId);
    
    if(existePush){
      return;
    }

    //Se guarda la notificación en el array de mensajes
    this.mensajes.unshift(notificacion);
    //Cada vez que se reciba una notificación el observable va a emitir la nueva notificación
    this.pushListener.emit(notificacion);

    await this.guardarMensajes();
  }

  guardarMensajes(){

    this.storage.set('mensajes', this.mensajes);
  }

  //Se cargan los mensajes desde storage
  async cargarMensajes(){

    this.mensajes = await this.storage.get('mensajes') || [];
    return this.mensajes;
  }

  //Se cargan los mensajes
  async getMensajes(pull: boolean = false){

    if( pull ){
      this.paginaMensajes = 0;
    }

    this.paginaMensajes ++;

    let skip =  this.paginaMensajes - 1;
    skip = skip * 10;

    this.pagMen = await this.cargarMensajes();
    var ultMens = this.pagMen.slice(skip, this.paginaMensajes*10);

    return ultMens;
  } 

  /* async getMensajes(){

    await this.cargarMensajes();
    return [...this.mensajes];
  } */

  //Borrar los mensajes
  async borrarMensajes(){
    await this.storage.clear();
    //this.storage.remove('mensajes');
    this.mensajes = [];
    this.guardarMensajes();

  }

  //Se crea el id del usuario para recivir notificaciones
  async setUserId(){

    this.usuario = this.usuarioService.obtenerUsuario();
    
    var user = this.usuario._id;

    OneSignal.setExternalUserId(user, (results) => {
      // The results will contain push and email success statuses
      //console.log('Results of setting external user id');
      //console.log(results);  
            
    });
  
  }

  async enviarNotificacion(title, body){

    (await this.usuarioService.obtenerIdMiembrosComunidad()).subscribe(
      respuesta =>
    { 
      //pasamos la informacion usuarios
      this.usuariosComunidad =  respuesta['miembros'];
      
      for(var i = 0; i<this.usuariosComunidad.length; i++ ){

        this.userId.push(this.usuariosComunidad[i]._id);
      }

      this.notificacion.include_external_user_ids = this.userId;
      this.notificacion.contents.es = title;
      this.notificacion.headings.es = body; 

      const headers = new HttpHeaders({
        'Authorization': 'Basic YWQ1OGE1OGYtOTUwZC00ZWE3LWFmZDQtMDRkMDkxZjIwZWY1'
      });

      return new Promise( resolve => {

        this.http.post(`https://onesignal.com/api/v1/notifications`, this.notificacion, {headers})
            .subscribe(response => {
          
              resolve(true);
            });
      });

    }
   );

  }
}
