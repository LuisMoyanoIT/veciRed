import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UsuarioService } from '../../servicios/usuario.service';
import { DatePipe  } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {}
  
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.obtenerUsuario();
  }
  obtenerUsuario()
  {
    this.usuarioService.obtenerDataPerfil().subscribe(
      respuesta =>
      {
        //console.log(respuesta['usuarioBD'])
        this.usuario = respuesta['usuarioBD'];
        const datepipe: DatePipe = new DatePipe('en-US');
        let fecha = new Date(this.usuario.fechaNacimiento)
        console.log(fecha);
        this.usuario.fechaNacimiento = datepipe.transform(fecha,' dd-MM-YYYY');
        //console.log(this.usuario.fechaNacimiento);
        //  var date: Date = this.usuario.fechaNacimiento
         
      }
    )
  }

}
