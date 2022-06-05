import { Component, OnInit } from '@angular/core';
import { Comunidad, Usuario } from 'src/app/interfaces/interfaces';
import { ComunidadService } from 'src/app/servicios/comunidad.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AlertasService } from '../../servicios/alertas.service';

@Component({
  selector: 'app-gestionar',
  templateUrl: './gestionar.page.html',
  styleUrls: ['./gestionar.page.scss'],
})
export class GestionarPage implements OnInit {

  usuarios: Usuario[] = [];
  mainCom: Comunidad = {};
  rolCheck = [];
  changeRol= false;
  dataUsuario={
    idUsuario:'',
    idComunidad:'',
    rol:Number
  }
  position:number;
  constructor(private usuarioService: UsuarioService,
              private alertasService: AlertasService) { }

  ngOnInit() {
    this.rolCheck[0] =1;
  }


   ionViewWillEnter() {
    //primero obtenemos la info de la comunidad 
    //this.obtenerNameComu();
    //luego traemos a los usuarios[rol, array]
    this.obtenerMiembros();

    //this.check();
  }

   async obtenerMiembros()
  {
    

    (await this.usuarioService.obtenerMiembrosComunidad()).subscribe(
       respuesta =>
      { 
        //pasamos la informacion usuarios
        this.usuarios =  respuesta['miembros'];
        //pasamos la informacion de comunidad a comunidad
        this.mainCom =  respuesta['comBD'];
        //creamos arrays locales para trabajar mejor la data
        let arrayComunidades= [], arrayRol= [];
        //iteramos usuarios para trabajar unitariamente rol y array
        for(let value of this.usuarios)
        {
          //asignamos los valores a los array aux
          arrayComunidades = value.comunidad;
          arrayRol = value.rol;
  
          //teniendo la ID de la comunidad, obtenemos el index
          /*recordemos que id comunidad y rol comparten la misma posicion
          para TODOS los usuarios*/
          let index = arrayComunidades.indexOf(this.mainCom._id);
          arrayRol = arrayRol[index]
          //NO BORRAR XD
          value.rol= arrayRol
        }
      }
    )

  }


  async actualizarRol(usuario)
  {
    //console.log(usuario);
    this.dataUsuario.idUsuario = usuario._id;
    this.dataUsuario.idComunidad = this.mainCom._id;
    //console.log(this.dataUsuario);
    const actualizado = await this.usuarioService.actualizarRolUsuario(this.dataUsuario);
    if(actualizado)
    {
      this.alertasService.presentToast('Modificación exitosa');
      
      this.usuarios= [];
      this.mainCom= {};
      this.changeRol= false;
      this.dataUsuario={
        idUsuario:'',
        idComunidad:'',
        rol:Number
  }
      this.position = null;
      this.ionViewWillEnter();
    }

  }

  /*Función que nos entrega el valor modificado, la posicion y el rol 
  actual del usuario*/
  onSelectedChange(event, index, userRol)
  {
    
    //preguntamos si el rol del usuario es distinto al valor entregado
    //en el ion-select para habilitar el boton de actualizar
    if(userRol != event.target.value)
    {
      this.dataUsuario.rol = event.target.value;
      this.position = index; 
    }else{
      this.position = null;
    }
  }



  
}
