import { Component, Input, OnInit } from '@angular/core';
import { Avisos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-aviso-publicado',
  templateUrl: './aviso-publicado.component.html',
  styleUrls: ['./aviso-publicado.component.scss'],

  
})

export class AvisoPublicadoComponent implements OnInit {

  

  @Input() aviso: Avisos= {
    titulo: '',
    descripcion: '',
    imagenAviso: [],
    fechaCreacion: '',
    usuario: {},
    comunidad: {}
  };

  constructor() { }

  ngOnInit() {}

}
