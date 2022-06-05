import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './servicios/usuario.service';
import { AvisosService } from './servicios/avisos.service';
import { NavController, MenuController } from '@ionic/angular';
import { Usuario } from './interfaces/interfaces';
import { SolicitudService } from './servicios/solicitud.service';
import { PushService } from './servicios/push.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  rol;
  usuario: Usuario = {};
  largoSolicitud = 0;
  constructor( private usuarioService: UsuarioService,
               private avisosService: AvisosService,
               private navController: NavController,
               public menuCtrl: MenuController,
               private solicitudService: SolicitudService,
               private pushService: PushService) {}
  
  ngOnInit() 
  {
    this.pushService.OneSignalInit(); 
     
  }

  logout(){
    this.avisosService.contadorPagina = 0;
    this.usuarioService.logout();
  }

  goToMisAvisos()
  {
    this.navController.navigateRoot('/main/tabs/mis-avisos',{animated: true});

  }

  obtenerRolUsuario()
  {
    this.usuarioService.obtenerRolBD().subscribe(
      respuesta =>{
   
        this.rol = respuesta['currentRol'];
        if(this.rol == 1)
        {
          this.obtenerLargoSolicitud();
        }
       
      }
    )
  }

  obtenerLargoSolicitud()
  {
    this.solicitudService.obtenerLargoSolicitudes().subscribe(
      respuesta =>
      {
        this.largoSolicitud = respuesta['length'];
      }
    )
  }

  

  menuOpened()
  {
    
    this.obtenerRolUsuario();

    if(this.rol == 1)
    {
      this.obtenerLargoSolicitud();
    }
    
  }




}
