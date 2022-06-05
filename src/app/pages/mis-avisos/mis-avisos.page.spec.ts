import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { MisAvisosPage } from './mis-avisos.page';

describe('MisAvisosPage', () => {
  let component: MisAvisosPage;
  let fixture: ComponentFixture<MisAvisosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer],
      declarations: [ MisAvisosPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule,RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MisAvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //INICIO DE LAS VALIDACIONES ELIMINAR AVISO

  it('Aviso eliminado exitosamente', (() => {
    //creamos una solicitud para testear el boton
    //recordemos que solo si existen solicitudes se muestra el boton de aceptar
    //por lo tanto debemos crear una solicitud

   component.misAvisos[0] = {
     _id: '61fa9d36bb87294af09bbc09',
     comunidad: {
       nombreComunidad: 'VeciRed'
     }, 
     titulo: 'testing title',
     descripcion: 'testing description',
     imagenAviso: [],
     usuario: {
       nombre: 'Juan Gabriel'
     }
   }
   //con detectChanges la prueba unitaria reconoce nuestros cambios 

   fixture.detectChanges();

   //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
   spyOn(component, 'eliminarAviso').and.callThrough();
   
   //spyOn(component, 'aceptarVecino');
   //capturamo el boton por css como es de costumbre
   let button = fixture.debugElement.nativeElement.querySelector('.eliminarAviso');
   
   button.click();


   fixture.whenStable().then(() => {
     //espera que la funcion haya sido llamada
     expect(component.eliminarAviso).toHaveBeenCalled();
   });
 
 }));

 //INICIO DE LAS VALIDACIONES ELIMINAR AVISO
});
