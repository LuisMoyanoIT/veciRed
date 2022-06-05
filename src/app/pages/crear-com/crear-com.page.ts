import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../../servicios/alertas.service';
import { ComunidadService } from '../../servicios/comunidad.service';
import { Usuario } from '../../interfaces/interfaces';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-crear-com',
  templateUrl: './crear-com.page.html',
  styleUrls: ['./crear-com.page.scss'],
})
export class CrearComPage implements OnInit {

  comunidad = {
    nombreComunidad: '',
    descripcion: '',
    coordenadas: '',
    usuario: '',
    region: '',
    comuna: ''
  }

  usuario: Usuario = {};

  constructor( private alertasService: AlertasService,
               private comunidadService: ComunidadService,
               private navController: NavController,
               private usuarioService: UsuarioService

             ) { }

  ngOnInit() {
    //this.obtenerUsuario();
  }

  async crearComunidad()
  {
    const validado = this.validacion();

    if(validado == null)
    {
      const comunidadCreada =  await this.comunidadService.crearComunidad(this.comunidad);
    
      if(comunidadCreada)
      {
        //VACIAMOS VARIABLES 8)
        this.comunidad = {
          nombreComunidad: '',
          descripcion: '',
          coordenadas: '',
          usuario: '',
          region: '',
          comuna: ''
      }
      this.usuario = {};
      this.navController.navigateRoot('main/tabs/comunidad');
      this.alertasService.presentToast('Comunidad creada exitosamente'); 
    }else{
      this.alertasService.presentToast('Ya existe un nombre con esa comunidad'); 
      }
    }
  
    
  
  }


  obtenerUsuario()
  {
    this.usuario = this.usuarioService.obtenerRolUsuario();
    this.comunidad.usuario = this.usuario._id;


  }

  ionViewWillEnter() {
    //VACIAMOS VARIABLES 8)
    this.comunidad = {
      nombreComunidad: '',
      descripcion: '',
      coordenadas: '',
      usuario: '',
      region: '',
      comuna: ''
    }
    this.usuario = {};
    this.obtenerUsuario();
  }

  validacion()
  {
     //Validación caracteres extraños en nombre
     var caracteres = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,50})+$/g;
     var caracteres2 = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,250})+$/g;

     if(caracteres.test(this.comunidad.nombreComunidad) == false)
     {
      return this.alertasService.alerta('El Nombre de la comunidad no permite tener caracteres especiales');
    }
 
    if(caracteres2.test(this.comunidad.descripcion) == false){
      return this.alertasService.alerta('La descripción de la comunidad no permite tener caracteres especiales');
    }
 
     if(this.comunidad.nombreComunidad.length > 25)
     {
       return this.alertasService.alerta('Nombre demasiado largo');
     }

     if(this.comunidad.nombreComunidad.length <= 2)
     {
       return this.alertasService.alerta('Nombre debe tener más de 3 caracteres');
     }
 
     if(this.comunidad.descripcion.length > 250)
     {
       return this.alertasService.alerta('Descripción demasiada larga');
     }

     if(this.comunidad.descripcion.length <= 2)
     {
       return this.alertasService.alerta('Descripción debe tener más de 3 caracteres');
     }

     if(this.comunidad.region == '')
     {
      return this.alertasService.alerta('Debe seleccionar una región');

     }

     if(this.comunidad.comuna == '')
     {
       return this.alertasService.alerta('Debe seleccionar una comuna');
     }

     return null;

  }

}
