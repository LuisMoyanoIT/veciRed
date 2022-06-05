import { Component, Input, OnInit } from '@angular/core';
import { Acuerdos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-acuerdos-comunidad',
  templateUrl: './acuerdos-comunidad.component.html',
  styleUrls: ['./acuerdos-comunidad.component.scss'],
})
export class AcuerdosComunidadComponent implements OnInit {

  @Input() acuerdosComunidad: Acuerdos[] = [];

  constructor() { }

  ngOnInit() {}

}


