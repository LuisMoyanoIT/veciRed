import { Component, OnInit } from '@angular/core';
import { Avisos, Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { AvisosService } from '../../servicios/avisos.service';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../../servicios/alertas.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';


declare var window: any;

@Component({
  selector: 'app-editar-aviso',
  templateUrl: './editar-aviso.page.html',
  styleUrls: ['./editar-aviso.page.scss'],
})
export class EditarAvisoPage implements OnInit {

  avisoEdicion: Avisos = {
    titulo: '',
    descripcion: '',
    tipoAviso : 0
  };
  imagenCarrete: string;
  usuario: Usuario = {};
  tipoAvisoName = 'default';
  Roltype = [];

  constructor( private usuarioService: UsuarioService,
               private avisosService: AvisosService,
               private navController: NavController,
               private alertasService: AlertasService,
               private camera: Camera
             ) { }

  ngOnInit() 
  {

    //al cargar la pagina llamamos a obtenerRolUsuario para cargar los datos de usuario
    this.obtenerRolUsuario();
    //obtenemos el aviso enviado desde mis avisos
    this.obtenerAvisoEditar();

  }


  async editarAviso()
  {
    const validado = this.validacion();

    if(validado == null)
    {
      //console.log('click' + this.avisoEdicion.descripcion + this.avisoEdicion.titulo + this.avisoEdicion.tipoAviso);
      const actualizado = await this.avisosService.actualizarAviso(this.avisoEdicion);

      if(actualizado)
      {
        this.imagenCarrete= '';
        this.Roltype = [];
        this.usuario = {};
        this.avisoEdicion = {
          titulo: '',
          descripcion: '',
          tipoAviso : 0
        };
      this.navController.navigateRoot('/main/tabs/mis-avisos',{animated: true});
      this.alertasService.presentToast('Aviso actualizado exitosamente'); 
      }else
      {
      this.alertasService.presentToast('Aviso no se pudo actualizar'); 
      }
    }
   
   
  }


  obtenerRolUsuario()
  {
    this.usuario = this.usuarioService.obtenerRolUsuario();
    this.Roltype[0] = this.usuario.rol
  }

  obtenerAvisoEditar()
  {
    this.avisosService.Objeto.subscribe( respuesta =>
      {
        this.avisoEdicion = respuesta;
        if(this.avisoEdicion.tipoAviso == 1)
        {
          this.tipoAvisoName = 'Emergencia';
        }else if(this.avisoEdicion.tipoAviso == 3)
        {
          this.tipoAvisoName = 'Información';
        }else if(this.avisoEdicion.tipoAviso == 4)
        {
          this.tipoAvisoName = 'Otro';
        }else if(this.avisoEdicion.tipoAviso == 5)
        {
          this.tipoAvisoName = 'Problema';
        }
        //console.log(this.avisoEdicion);
      })
  }


  getImagen()
  {
    
    const options: CameraOptions = 
    {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
      //sourceType: this.camera.PictureSourceType.CAMERA
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
     //  let base64Image = 'data:image/jpeg;base64,' + imageData;
     const imagen = window.Ionic.WebView.convertFileSrc(imageData);
     //console.log(imagen);
     this.avisosService.uploadImagen(imageData);
     this.imagenCarrete = imagen;
     
     }, (err) => {
      console.log(err);
     });
  }


  ionViewWillEnter() {
    //this.obtenerAvisoEditar();
    this.obtenerRolUsuario();
    
    
  }
  
  ionViewDidLeave(){
    this.imagenCarrete= '';
    this.Roltype = [];
    this.usuario = {};
    this.avisoEdicion = {
      titulo: '',
      descripcion: '',
      tipoAviso : 0
    };
  }

  validacion()
  {
     //Validación caracteres extraños en nombre
     var caracteres = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,50})+$/g;
     var caracteres2 = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,250})+$/g;

     if(caracteres.test(this.avisoEdicion.titulo) == false)
     {
      return this.alertasService.alerta('El título no permite tener caracteres especiales');
     }
 
    if(caracteres2.test(this.avisoEdicion.descripcion) == false)
    {
      return this.alertasService.alerta('La descripción no permite tener caracteres especiales');
    }
    if(this.avisoEdicion.titulo.length > 30)
    {
      return this.alertasService.alerta('Título demasiado largo');
    }

    if(this.avisoEdicion.titulo.length <= 2)
    {
      return this.alertasService.alerta('Título debe tener más de 3 caracteres');
    }
 
    if(this.avisoEdicion.descripcion.length > 250)
    {   
      return this.alertasService.alerta('Descripción demasiada larga');
    }

    if(this.avisoEdicion.descripcion.length <= 2)
    {   
      return this.alertasService.alerta('Descripción debe tener más de caracteres');
    }

    if(this.avisoEdicion.tipoAviso == 0)
    {
      return this.alertasService.alerta('Debe seleccionar un tipo de aviso');
    }

    return null;
  }

}
