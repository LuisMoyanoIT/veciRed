import { Component, OnInit, EventEmitter } from '@angular/core';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { AlertasService } from 'src/app/servicios/alertas.service';

@Component({
  selector: 'app-editar-opciones',
  templateUrl: './editar-opciones.page.html',
  styleUrls: ['./editar-opciones.page.scss'],
})
export class EditarOpcionesPage implements OnInit {

  opciones : Object[] = [];
  titulos: string = '';
  res: Object[] = [];
 // res = new EventEmitter<{}>();

  opcion: Object[]  = [{

    titulo:'',
    descripcion:'',
    votos: 0
  },
  {
    titulo:'',
    descripcion:'',
    votos: 0
  },
  {
    titulo:'',
    descripcion:'',
    votos: 0
  },
  {
    titulo:'',
    descripcion:'',
    votos: 0
  }];
  

  ocultarOpcion3 = true;
  ocultarOpcion4 = true;
  contador = 0;
  desactivarBotonAdd = false;
  desactivarBotonRemove = true;

  constructor(private acuerdosService: AcuerdosService,
              private router: Router,
              private navCtrl: NavController,
              private alertasService: AlertasService) { }

  ngOnInit() {
    this.acuerdosService.Objeto.subscribe(respuesta =>{

      this.res = respuesta['opciones'];
      var count = 0;

      for(let i = 0; i < this.res.length ; i++){

        this.opcion[i]['titulo'] = this.res[i]['titulo'];
        this.opcion[i]['descripcion'] = this.res[i]['descripcion'];
        count ++;
      }
   
      count = count - 3;
      this.agregarOpcion(count);

    }).unsubscribe();
  }

  agregarOpcion(count?: number){

    //var contador: number = count;

    if(count != null){
      //undefined
      this.contador = count;
    }
    
    this.contador++;

    if(this.contador > 0){

      this.ocultarOpcion3 = false;
      this.desactivarBotonRemove = false;
    } 
    
    if(this.contador > 1){

      this.ocultarOpcion4 = false;
      this.desactivarBotonAdd = true;
    }

  }

  eliminarOpcion(){

    this.contador --;

    if(this.contador < 1){
      
      this.ocultarOpcion3 = true;
      this.desactivarBotonRemove = true;
    }
    
    if(this.contador < 2){

      this.ocultarOpcion4 = true;
      this.desactivarBotonAdd = false;
    }
  }

  enviarOpciones(){

    const validado = this.validacion();

    if(validado == null){

      this.opciones.push( this.opcion[0] );
      this.opciones.push( this.opcion[1] );
  
      if(this.contador >= 1){
  
        this.opciones.push( this.opcion[2] );
      }
  
      if(this.contador == 2){
  
        this.opciones.push( this.opcion[3] );
      }
     
      this.acuerdosService.enviarDatos(this.opciones, false);
      this.router.navigate(['/main/tabs/editar-acuerdo']);
      //this.navCtrl.navigateRoot('/main/tabs/editar-acuerdo');
      this.opciones = [];
    } 
  }

  validacion(){

    //Validaci??n caracteres extra??os en titulo de la opcip??n 1
    var caracteresTitulo1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,30})+$/g;

    if(caracteresTitulo1.test(this.opcion[0]['titulo']) == false){
      
      return this.alertasService.alerta('Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 30.');
    }

    //Validaci??n caracteres extra??os en la descripci??n de la opcip??n 1
    var caracteresDescripcion1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,250})+$/g;

    if(caracteresDescripcion1.test(this.opcion[0]['descripcion']) == false){
      
      return this.alertasService.alerta('Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 250.');
    }

    //Validaci??n caracteres extra??os en titulo de la opcip??n 2
    var caracteresTitulo1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,30})+$/g;

    if(caracteresTitulo1.test(this.opcion[1]['titulo']) == false){
      
      return this.alertasService.alerta('Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 30.');
    }

    //Validaci??n caracteres extra??os en la descripci??n de la opcip??n 2
    var caracteresDescripcion1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,250})+$/g;

    if(caracteresDescripcion1.test(this.opcion[1]['descripcion']) == false){
      
      return this.alertasService.alerta('Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 250.');
    }

    if(this.contador >= 1){
      //Validaci??n caracteres extra??os en titulo de la opcip??n 3
      var caracteresTitulo1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,30})+$/g;

      if(caracteresTitulo1.test(this.opcion[2]['titulo']) == false){
        
        return this.alertasService.alerta('Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 30.');
      }

      //Validaci??n caracteres extra??os en la descripci??n de la opcip??n 3
      var caracteresDescripcion1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,250})+$/g;

      if(caracteresDescripcion1.test(this.opcion[2]['descripcion']) == false){
        
        return this.alertasService.alerta('Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 250.');
      }

    }

    if(this.contador == 2){
      //Validaci??n caracteres extra??os en titulo de la opcip??n 4
      var caracteresTitulo1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,30})+$/g;

      if(caracteresTitulo1.test(this.opcion[3]['titulo']) == false){
        
        return this.alertasService.alerta('Las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 30.');
      }

      //Validaci??n caracteres extra??os en la descripci??n de la opcip??n 4
      var caracteresDescripcion1 = /(^[A-Za-z????????????????????????0-9??!???\-.,()=/@ ]{3,250})+$/g;

      if(caracteresDescripcion1.test(this.opcion[3]['descripcion']) == false){
        
        return this.alertasService.alerta('Las descripciones de las opciones del acuerdo no permiten tener los caracteres ingresados. Con un m??nimo de 3 caracteres y un m??ximo de 250.');
      }
    }
  }

}
