import { Component, Input, OnInit } from '@angular/core';
import { Avisos } from '../../interfaces/interfaces';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
})
export class AvisosComponent implements OnInit {

  @Input() avisos: Avisos[] = [];
  
  constructor() { }

  ngOnInit() {
    
    //console.log(this.avisos)
    

}
}
