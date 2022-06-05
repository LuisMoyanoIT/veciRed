import { DatePipe  } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { Acuerdos } from '../../interfaces/interfaces';
import { OpcionesPage } from '../opciones/opciones.page';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertasService } from '../../servicios/alertas.service';

declare var window: any;

@Component({
  selector: 'app-crear-acuerdo',
  templateUrl: './crear-acuerdo.page.html',
  styleUrls: ['./crear-acuerdo.page.scss'],
})
export class CrearAcuerdoPage implements OnInit {

  @ViewChild(OpcionesPage) child;

  tempImages: string;

  today = new Date(); 
  minTime: String = this.today.toISOString();

  plataforma:boolean;
  //acuerdoCreado: any;
  fecha;
  hora = null;

  acuerdo: Acuerdos = 
  {
    titulo:'',
    descripcion:'',
    fecha:null,
    hora:null,
    duracion:null,
    opciones: {}
  };

  constructor(private acuerdosService: AcuerdosService,
              private navCtrl: NavController,
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

      this.acuerdo.opciones = respuesta;
    });
  }

  async crearAcuerdo(){

    const datepipe: DatePipe = new DatePipe('en-US');
    this.acuerdo.fecha = datepipe.transform(this.fecha,'YYYY-MM-dd');
    this.acuerdo.hora = datepipe.transform(this.hora,'HH:mm');

    const validado = this.validacion();

    if(validado == null){
  
      const acuerdoCreado = await this.acuerdosService.crearAcuerdo(this.acuerdo);
  
      this.acuerdo = { 
        titulo:'',
        descripcion:'',
        fecha:null,
        hora:null,
        duracion:null,
        opciones: {}
      };
  
      this.tempImages = '';
  
      this.acuerdosService.limpiar(true);

      if(acuerdoCreado){

        this.navCtrl.navigateRoot('/main/tabs/acuerdos', {animated: true});
        this.alertasService.presentToast('Acuerdo creado exitosamente'); 
      }else{
        this.alertasService.presentToast('El acuerdo no pudo ser creado');
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
    //var fechaMaxima = new Date('2126-01-01').toISOString(); 
    console.log(new Date('2122-03-07').toISOString());
    console.log(this.acuerdo.fecha);
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

      /*    this.avisosService.uploadImagen(imageData);
      this.imagenCarrete = imagen;
      */
      this.acuerdosService.subirImagen(imageData);
      this.tempImages = imagen;
      
    }, (err) => {
     console.log(err);
    });
  }

  mostrarOpciones(){

    this.acuerdo.opciones = {};  
    this.navCtrl.navigateRoot('/main/tabs/opciones', {animated: true});
  }

  volverAtras() {

    this.acuerdosService.limpiar(true);
    
    this.acuerdo = {
      titulo:'',
      descripcion:'',
      fecha:null,
      hora:null,
      duracion:null,
      opciones: {}
    }
  }
}
