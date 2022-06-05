
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AvisosCreados, Avisos } from '../interfaces/interfaces';
import { UsuarioService } from './usuario.service';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { BehaviorSubject, ReplaySubject } from 'rxjs';


const url = environment.url;
@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  //se crea un nuevo event emitter que enviara nuestro aviso recien creado al tab1
  nuevoAviso = new EventEmitter<Avisos>();
  avisoEliminado = new EventEmitter<Avisos>();
  //contadores de la paginación de los avisos
  contadorPagina= 0;
  contadorPaginaAvisosUser= 0;

  //objeto que recibe data desde mis avisos y lo envia a editar aviso
  //Objeto = new BehaviorSubject<{}>({});
  // Objeto = new EventEmitter<Avisos>();
  Objeto = new ReplaySubject<{}>();

  //inyectamos el Http para poder hacer nuestra peticion de los avisos
  constructor( private http: HttpClient,
               private usuarioService: UsuarioService,
               private fileTransfer: FileTransfer ) { }

  
  obtenerAvisos(pull: boolean = false)
  {
    if(pull)
    {
      this.contadorPagina= 0;
    }
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    })
    this.contadorPagina++;
    return this.http.get<AvisosCreados>(`${url}/avisos/?pagina=${this.contadorPagina}`,{headers});
  }

  //funcion que recibe un aviso desde aviso-publicado y lo inserta en BD
  crearNuevoAviso(aviso)
  {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    })

    return new Promise( resolve =>
      {
        this.http.post(`${url}/avisos`, aviso,{headers}).subscribe( respuesta =>
          {
            // console.log(respuesta);
            this.nuevoAviso.emit(respuesta['aviso']);
            resolve(true);
          })

      });

   


  }

  //servicio para subir la imagen a la BD
  uploadImagen(imagenAviso: string)
  {
    const options: FileUploadOptions =
    {
      fileKey: 'imagenAviso',
      headers: {
                'UToken' : this.usuarioService.userToken
               }
    };

    //creamos una tarea
    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload(imagenAviso, `${url}/avisos/subirImagen`, options  )
    .then( data => {
      console.log(data);
    }).catch( err => {
      console.log('Fallo al subir imagen:', err);
    });

  }

  obtenerAvisosUsuario(pull: boolean = false)
  {

    if(pull)
    {
      this.contadorPaginaAvisosUser = 0;
    }
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    })
    this.contadorPaginaAvisosUser++;
    //this.contadorPagina++;
    return this.http.get<AvisosCreados>(`${url}/avisos/usuario/?pagina=${this.contadorPaginaAvisosUser}`,{headers});

  }

  //funcion que recibe data desde mis avisos y lo envia a editar aviso
  enviarDatos(datos)
  {
    const aux = datos;
    this.Objeto.next(aux);
  }

  //funcion para actualizar una viso
  actualizarAviso(aviso: Avisos)
  {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    })

    return new Promise(resolve =>
      {
        this.http.post(`${url}/avisos/actualizar`, aviso,{headers}).subscribe(
          respuesta =>
          {
            if(respuesta['ok'])
            {
              this.nuevoAviso.emit(respuesta['aviso']);
              resolve(true);
            }else
            {
              resolve(false);
            }
          }
        )
      })
  }


  //funcion para eliminar un aviso
  eliminarAviso(aviso: Avisos)
  {
    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return new Promise(resolve =>
      {
        this.http.post(`${url}/avisos/eliminar`, aviso, {headers}).subscribe(
          respuesta =>
          {
            if(respuesta['ok'])
            {
              this.avisoEliminado.emit(respuesta['aviso']);
              resolve(true);
            }else{
              resolve(false);
            }
          }
        )
      });



  }


}
