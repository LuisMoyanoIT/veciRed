import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Comunidad } from '../../interfaces/interfaces';
import { ComunidadService } from '../../servicios/comunidad.service';
import { SolicitudService } from '../../servicios/solicitud.service';
import { AlertasService } from '../../servicios/alertas.service';

@Component({
  selector: 'app-buscar-com',
  templateUrl: './buscar-com.page.html',
  styleUrls: ['./buscar-com.page.scss'],
})
export class BuscarComPage implements OnInit {

  //objeto que nos guarda los valores del buscador
  comunidad = {
    nombreComunidad: '',
    region: '',
    comuna: ''
  }
  //array objeto que nos muestra el conjunto de comunidades que cumplan con la busqueda
  comunidades: Comunidad[] = [];
  //variable que se hace true y muestra img en pantalla
  noComunity = false;

  mostrarInputMensaje = false;
  //objeto que contiene la id de la comunidad y el mensaje de solicitud a registrar
  solicitud = {
    _id: '',
    mensaje: '¡Hola!, me gustaria unirme a tu comunidad'
  }
  //variable que nos guarda la posicion de la comunidad a enviar
  position;
  //array que nos guarda las com... para compararlas y verificar que usuario no pertenece
  arrayComunidades = [];

  perteneceUser = false;

  constructor(private comunidadService: ComunidadService,
              private solicitudService: SolicitudService,
              private alertasService: AlertasService,
              private usuarioService: UsuarioService) { }

  ngOnInit() {

    //this.obtenerComunidadesUsuario();
    
    this.solicitudService.nuevaSolicitud.subscribe(
      async respuesta =>
      {
        


        if(respuesta['ok'] === true)
        {
          await this.alertasService.alerta('¡Su solicitud ha sido enviada!');
          return;
        }else{
          await this.alertasService.alerta('¡Ya has enviado una solicitud a esta comunidad!');
          return;
        }
        
      }
    );
  }

  async buscar()
  {
    const validado = this.validacionBuscarCom();
    if(validado == null)
    {
      //console.log(this.comunidad.nombreComunidad + this.comunidad.region +' '+ this.comunidad.comuna);
    await this.comunidadService.filtrarComunidad(this.comunidad).subscribe(
      respuesta =>
      {
          this.comunidad = {
          nombreComunidad: '',
          region: '',
          comuna: ''
        }
        this.comunidades = [];
        this.noComunity = false;
        this.solicitud = {
          _id: '',
          mensaje: '¡Hola!, me gustaria unirme a tu comunidad'
        };

        this.mostrarInputMensaje = false;
        this.position = null;
        //this.arrayComunidades = [];
        
        
        this.comunidades.push(...respuesta['comunidades']);
        //respuesta para busqueda no exitosa
        if(respuesta['comunidades'].length < 1)
        {
          this.noComunity = true;
        }
        
      }
    )

    }

    
    
  }

  validacionBuscarCom()
  {
    //Validación caracteres extraños en nombre
    var caracteres = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,50})+$/g;
    
    if(this.comunidad.nombreComunidad.length > 30)
    {
      return this.alertasService.alerta('El nombre de la comunidad buscada no puede tener más de 30 caracteres');
    }
    
    if(caracteres.test(this.comunidad.nombreComunidad) == false)
    {
     return this.alertasService.alerta('El buscador no permite tener caracteres especiales');
    }

    if(this.comunidad.nombreComunidad.length < 1)
    {
      return this.alertasService.alerta('La comunidad buscada debe tener más de 2 caracteres');
    }

    
    

   return null;
  }

  //al cargar la pagina vaciaremos todas las variables
  ionViewWillEnter()
  {
    this.comunidades = [];
    this.noComunity = false;
    this.comunidad = {
      nombreComunidad: '',
      region: '',
      comuna: ''
    }
    this.solicitud = {
      _id: '',
      mensaje: '¡Hola!, me gustaria unirme a tu comunidad'
    }

    this.mostrarInputMensaje = false;
    this.position = null;
    //this.arrayComunidades = [];
    //this.obtenerComunidadesUsuario();
    
  }


  async unirme(indexOfelement)
  {
    this.solicitud = {
      _id: '',
      mensaje: '¡Hola!, me gustaria unirme a tu comunidad'
    };
    this.position = indexOfelement;
    this.mostrarInputMensaje = true;
    this.obtenerComunidadesUsuario();
   
  }

  enviarSolicitud(comunity)
  {
    //validacion para comprobar que usuario no pertenece
    /*enviamos desde el *ngFor a comunity._id variable que almacena la id del usuario y luego la evaluamos en el array
    del usuario para verificar si existe alguna coincidencia*/
    
    const validado = this.validacion();

    if(validado == null)
    {
      this.solicitud._id = comunity._id;
    
      let index = this.arrayComunidades.indexOf(this.solicitud._id);
      if(index != -1)
      {
        
        return this.alertasService.alerta('¡Ya perteneces a esta comunidad!');
      }
    
      //INICIO ENVIO DE DATOS
      this.solicitudService.crearSolicitud(this.solicitud);
 
      this.comunidades = [];
    }
    
  }

   async obtenerComunidadesUsuario()
  {
    await this.usuarioService.obtenerArrayComunidadesUsuario().subscribe(
       async respuesta =>
      {
        this.arrayComunidades = [];
        this.arrayComunidades = await respuesta['comunidades']['comunidad']; 
      }
    )

  }

  validacion()
  {
    //Validación caracteres extraños en nombre
    var caracteres = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,250})+$/g;
 
    

    if(this.solicitud.mensaje.length <= 2)
    {
      return this.alertasService.alerta('El mensaje no puede tener menos de 3 caracteres');
    }

    if(this.solicitud.mensaje.length > 250)
    {
      return this.alertasService.alerta('El mensaje no puede tener más de 250 caracteres');
    }

    if(caracteres.test(this.solicitud.mensaje) == false)
    {
     return this.alertasService.alerta('El mensaje no permite tener caracteres especiales');
    }

    return null;
  }

}
