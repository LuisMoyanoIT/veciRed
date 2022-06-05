import { Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Acuerdos, Usuario } from '../../interfaces/interfaces';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { CuentaRegresivaComponent } from '../../herramientas/cuenta-regresiva/cuenta-regresiva.component';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../servicios/usuario.service';
import { GraficoComponent } from '../../herramientas/grafico/grafico.component';

@Component({
  selector: 'app-detalle-votacion',
  templateUrl: './detalle-votacion.page.html',
  styleUrls: ['./detalle-votacion.page.scss'],
})
export class DetalleVotacionPage implements OnInit {
  
  @ViewChild(CuentaRegresivaComponent) child;
  @ViewChild(GraficoComponent) grafico;
 
  private subscription: Subscription;

  buttonValue = -1;

  votacion: Acuerdos = {

    titulo:'',
    descripcion:'',
    fecha:null,
    hora:null,
    duracion:0,
    opciones: {},
    votantes: []
  };

  usuario: Usuario = {};

  ocultar = true;

  constructor(private acuerdosService: AcuerdosService,
              private navCtrl: NavController,
              private usuarioService: UsuarioService) { }
              
              
  ngOnInit() {

    this.acuerdosService.Objeto.subscribe(respuesta =>{
  
      this.votacion = respuesta;
    });

    this.obtenerUsuario();
  }

  mostrarInfo(){
    
    this.acuerdosService.enviarDatos(this.votacion);
    this.navCtrl.navigateRoot('/main/tabs/info');

  }

  async votar(opcion){
    //A la opcion que se eligio se le suma un voto
    this.votacion.opciones[opcion]['votos']++;
    //Insertamos la id del usuario votante
    this.votacion.votantes.push(this.usuario._id);
    //Luego se actualzia la votacion(se envia el objeto que contiene elacuerdo con las opciones)
    const actualizado = await this.acuerdosService.actualizarAcuerdo(this.votacion);
    //Si la actualizacion ocurrio sin problemas se redirecciona a votaciones
    if(actualizado){
      //Se vuelve a crear el grafico con los datos acualizados     
      this.grafico.ngOnDestroy();
      this.grafico.ngAfterViewInit();
      //Se ocultan las opcion para mostrar el grafico   
      this.ocultar = false;
      //Se bloquea el boton votar
      this.buttonValue = -1;
    }else{
      //Mensaje error
      console.log('No se logra' + actualizado);

    }
  }

  obtenerUsuario(){

    this.usuario = this.usuarioService.obtenerUsuario();

    if(this.votacion.votantes.length !== 0){

      for (let index = 0; index < this.votacion.votantes.length; index++) {
  
        if(this.usuario._id == this.votacion.votantes[index]){
          this.ocultar = false;
        }
      }
    }else{
      this.ocultar = true;
    }
  }
  
  ionViewWillEnter() {
  
    this.child.ngOnDestroy();
    this.child.ngOnInit();
    this.grafico.ngOnDestroy();
    this.grafico.ngAfterViewInit();
    this.obtenerUsuario();
  } 

  ionViewDidLeave() {
    
    this.child.ngOnDestroy();
    this.grafico.ngOnDestroy();
  }
}
