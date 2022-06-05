import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Comunidad } from '../../interfaces/interfaces';
import { ComunidadService } from '../../servicios/comunidad.service';
import { AlertasService } from '../../servicios/alertas.service';

@Component({
  selector: 'app-editar-com',
  templateUrl: './editar-com.page.html',
  styleUrls: ['./editar-com.page.scss'],
})
export class EditarComPage implements OnInit {

  comunidadEditada: Comunidad = {
    nombreComunidad: '',
    descripcion: '',
    region: '',
    comuna: ''

  };
  
  constructor( private comunidadService: ComunidadService,
               private navController: NavController,
               private alertasService: AlertasService,
    
             ) { }

  ngOnInit()
  {
    this.obtenerComunidadEditar();
  }

  editarComunidad()
  {
    const validado = this.validacion();

    if(validado == null)
    {
      const actualizado = this.comunidadService.actualizarComunidad(this.comunidadEditada);
      if(actualizado)
      {
        this.comunidadEditada = {
        nombreComunidad: '',
        descripcion: '',
        region: '',
        comuna: ''
    
      };
        this.navController.navigateRoot('/main/tabs/comunidad',{animated: true});
        this.alertasService.presentToast('Comunidad editada exitosamente'); 
      }else{
        this.alertasService.presentToast('Comunidad No pudo ser editada'); 
      }
    }
    
    
  }

  async obtenerComunidadEditar()
  {
    await  this.comunidadService.Objeto.subscribe(
      async respuesta =>
      {
         this.comunidadEditada =  await respuesta;

      }
    )
  }

  ionViewWillEnter(){
    this.obtenerComunidadEditar();
  }

  validacion()
  {
    //Validación caracteres extraños en nombre
    var caracteres = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,50})+$/g;
    var caracteres2 = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!?¿@-_.,/()= ]{1,250})+$/g;

    if(caracteres.test(this.comunidadEditada.nombreComunidad) == false){
     
     return this.alertasService.alerta('El Nombre de la comunidad no permite tener caracteres especiales');
   }

   if(caracteres2.test(this.comunidadEditada.descripcion) == false){
     
     return this.alertasService.alerta('La descripción de la comunidad no permite tener caracteres especiales');
   }

    if(this.comunidadEditada.nombreComunidad.length > 25)
    {
      
      return this.alertasService.alerta('Nombre demasiado largo');
    }

    if(this.comunidadEditada.nombreComunidad.length <= 2)
    {
      
      return this.alertasService.alerta('Nombre debe tener al menos 3 caracteres');
    }

    if(this.comunidadEditada.descripcion.length > 250)
    { 
      return this.alertasService.alerta('Descripción demasiada larga');
    }

    if(this.comunidadEditada.descripcion.length <= 2)
    { 
      return this.alertasService.alerta('Descripción debe tener al menos 3 caracteres');
    }

    if(this.comunidadEditada.region == '')
    {
      return this.alertasService.alerta('Debe seleccionar una región');
    }

    if(this.comunidadEditada.comuna == '')
    {
      return this.alertasService.alerta('Debe seleccionar una comuna');
    }

    return null;

  }

}
