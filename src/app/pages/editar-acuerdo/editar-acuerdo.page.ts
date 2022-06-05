import { Component, OnInit } from '@angular/core';
import { Acuerdos } from '../../interfaces/interfaces';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { NavController, Platform } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertasService } from '../../servicios/alertas.service';

declare var window: any;

@Component({
  selector: 'app-editar-acuerdo',
  templateUrl: './editar-acuerdo.page.html',
  styleUrls: ['./editar-acuerdo.page.scss'],
})
export class EditarAcuerdoPage implements OnInit {

  tempImages: string;
  today = new Date(); 
  minTime: String = new Date(new Date().setHours(new Date().getHours() - 48)).toISOString();
  plataforma:boolean;

  acuerdo: Acuerdos = {

    titulo:'',
    descripcion:'',
    fecha:null,
    hora:null,
    duracion:null,
    opciones: {}
  };

  constructor(private acuerdosService: AcuerdosService,
              private navCtrl: NavController,
              private router: Router,
              private camera: Camera,
              private alertasService: AlertasService,
              private platform: Platform) { }

  ngOnInit() {

    if(this.platform.is('capacitor')){
      this.plataforma = false;
    }else{
      this.plataforma = true;
    }

    this.acuerdosService.Objeto.subscribe(respuesta =>{

      if(respuesta['tipo']){

        var res = respuesta;
        this.acuerdo = res;
      }else if(respuesta['tipo'] == false){

        this.acuerdo.opciones = respuesta;
      }

    });
  }

  mostrarOpciones(){

    this.acuerdosService.enviarDatos(this.acuerdo);
    this.router.navigate(['/main/tabs/editar-opciones']);
  }

  volverAtras(){

    this.navCtrl.navigateRoot('/main/tabs/acuerdos', {animated: true});

    this.acuerdo = {
      titulo:'',
      descripcion:'',
      fecha:null,
      hora:null,
      duracion:null,
      opciones: {}
    }
  }

  galeria(){

    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     
      const imagen = window.Ionic.WebView.convertFileSrc(imageData);

      this.acuerdosService.subirImagen(imageData);
      this.tempImages = imagen;
      
    }, (err) => {
     console.log(err);
    });
  }

  async actualizar(){

    const datepipe: DatePipe = new DatePipe('en-US');
    this.acuerdo.fecha = datepipe.transform(this.acuerdo.fecha,'YYYY-MM-dd');

    const validado = this.validacion();

    if(validado == null){
      
      const actualizado = await this.acuerdosService.actualizarAcuerdo(this.acuerdo);
  
      if(actualizado){
        //Mensaje actualizado
        this.navCtrl.navigateRoot('/main/tabs/acuerdos', {animated: true});
        this.alertasService.presentToast('Acuerdo modificado exitosamente');
      }else{
        //Mensaje error
        this.alertasService.presentToast('El acuerdo no pudo ser modificado');
      }
    }
  }

  validacion(){
    //Validación caracteres extraños en titulo
    var caracteresTitulo = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!¿?\-.,()=/@ ]{3,30})+$/g;

    if(caracteresTitulo.test(this.acuerdo.titulo) == false){
      
      return this.alertasService.alerta('El título del acuerdo no permite tener los caracteres ingresados. Con un mínimo de 3 caracteres y un máximo de 30.');
    }

    //Validación fecha vacia
    if(this.acuerdo.fecha == null){
      
      return this.alertasService.alerta('Debe seleccionar una día');
    }
    
    const yesterday = new Date(this.today);
    yesterday.setDate(yesterday.getDate() - 1);
  
    //Validar que la fecha no sea anterior a la fecha actual
    if(this.acuerdo.fecha < yesterday.toISOString()){
      
      return this.alertasService.alerta('El día seleccionado no debe ser anterior a la fecha actual');
    }
    
    //Validar que la fecha no sea superior a 31/12/2125
    if(this.acuerdo.fecha > new Date('2122-03-07').toISOString()){
      
      return this.alertasService.alerta('El día seleccionado no debe superar el 07/03/2122');
    }

    //Validación hora vacia
    if(this.acuerdo.hora == null){
      
      return this.alertasService.alerta('Debe seleccionar una hora');
    }

    //Validación duracion vacia
    if(this.acuerdo.duracion == null){
      
      return this.alertasService.alerta('Debe seleccionar una duracion');
    }

    //Validación duracion del acuerdo
    if(this.acuerdo.duracion < 1){
          
      return this.alertasService.alerta('La duración del acuerdo no puede ser menor a 1 hora');
    }

    //Validación duracion del acuerdo
    if(this.acuerdo.duracion > 48){
          
      return this.alertasService.alerta('La duración del acuerdo no puede ser mayor a 48 horas');
    }

    //Validación caracteres extraños en la descripción
    var caracteresDescripcion = /(^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9¡!¿?\-.,()=/@ ]{3,250})+$/g;

    if(caracteresDescripcion.test(this.acuerdo.descripcion) == false){
      
      return this.alertasService.alerta('La descripción del acuerdo no permite tener los caracteres ingresados. Con un mínimo de 3 caracteres y un máximo de 250.');
    }

    //Validación opciones vacio
    if(Object.keys(this.acuerdo.opciones).length === 0){
          
      return this.alertasService.alerta('Las opciones no pueden estar vacias');
    }
    
    return null;
  }
}
