import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Acuerdos, Comunidad } from '../../interfaces/interfaces';
import { AcuerdosService } from '../../servicios/acuerdos.service';


@Component({
  selector: 'app-votacion-publicada',
  templateUrl: './votacion-publicada.component.html',
  styleUrls: ['./votacion-publicada.component.scss'],
})
export class VotacionPublicadaComponent implements OnInit {

  @Input() votacionPublicada: Acuerdos = {

    titulo:'',
    descripcion:'',
    fecha:null,
    hora:null,
    duracion:null,
    imagenAcuerdo: [],
    opciones: {},
    comunidad: {},
    usuario: {}
  };

  fechaFormateada = null;

  constructor(private acuerdosService: AcuerdosService,
              private navCtrl: NavController) { }

  ngOnInit() {

    this.formatearFecha();
  }


  abrirVotacion(){

    this.acuerdosService.enviarDatos(this.votacionPublicada);
    this.navCtrl.navigateRoot('/main/tabs/detalle-votacion');
  }

  formatearFecha(){
    
    const datepipe: DatePipe = new DatePipe('en-US');
    let fecha = new Date(this.votacionPublicada.fecha);

    let days = ['Lunes','Martes','Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    var diaSemana = days[fecha.getUTCDay()-1];

    this.fechaFormateada = diaSemana + datepipe.transform(this.votacionPublicada.fecha,', dd-MM-YYYY');

  }

}
