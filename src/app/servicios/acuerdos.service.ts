import { HttpClient, HttpHeaders} from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UsuarioService } from './usuario.service';
import { AcuerdosCreados, Acuerdos } from '../interfaces/interfaces';
import { BehaviorSubject, Subject, Subscription, ReplaySubject } from 'rxjs';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class AcuerdosService {

  pagiaAcuerdos = 0;
  //Objeto = new BehaviorSubject<{}>({});
  //EventReceiver
  //private subscription: Subscription;
  Objeto = new ReplaySubject<{}>();
  //Objeto = new EventEmitter<{}>();
  nuevoAcuerdo = new EventEmitter<Acuerdos>();
  acuerdoEliminado = new EventEmitter<Acuerdos>();


  constructor(private http: HttpClient,
              private usuarioService: UsuarioService,
              private fileTransfer: FileTransfer) { }

  getAcuerdos(pull: boolean = false){

    if(pull){
      this.pagiaAcuerdos = 0;
    }

    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    this.pagiaAcuerdos++;

    return this.http.get<AcuerdosCreados>(`${URL}/acuerdos/?pagina=${this.pagiaAcuerdos}`, {headers});
  }

  crearAcuerdo(acuerdo){

    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return new Promise( resolve => {

      this.http.post(`${URL}/acuerdos`, acuerdo, {headers})
          .subscribe(response => {
            
            this.nuevoAcuerdo.emit(response['acuerdo']);
            resolve(true);
          });
    });

  }

  enviarDatos(datos, tipo?: boolean){

    datos.tipo=tipo;
    this.Objeto.next(datos);
  }

  limpiar(variable: boolean){

    this.Objeto.next(variable);
  }

  actualizarAcuerdo( acuerdo: Acuerdos){

    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return new Promise(resolve => {

      this.http.post(`${URL}/acuerdos/actualizar`, acuerdo, {headers})
        .subscribe(respuesta => {
          
          if(respuesta['ok']){
            
            resolve(true);
          }else{

            resolve(false);
          }
         
  
        });
    });
  }

  eliminarAcuerdo(acuerdo: Acuerdos){

    const headers = new HttpHeaders({
      'UToken': this.usuarioService.userToken
    });

    return new Promise(resolve => {

      this.http.post(`${URL}/acuerdos/actualizar`, acuerdo, {headers})
        .subscribe(respuesta => {
          
          if(respuesta['ok']){
            this.acuerdoEliminado.emit(respuesta['acuerdo']);
            resolve(true);
          }else{

            resolve(false);
          }
        });
    });
  }

  subirImagen( img: string){

    const options: FileUploadOptions = {
      
      fileKey: 'imagenAcuerdo',
      headers: {
                'UToken' : this.usuarioService.userToken
               }
    };

    //creamos una tarea
    const fileTransfer: FileTransferObject = this.fileTransfer.create();

    fileTransfer.upload(img, `${URL}/acuerdos/upload`, options  )
    .then( data => {
      console.log(data);
    }).catch( err => {
      console.log('Fallo al subir imagen:', err);
    });

  }
}
