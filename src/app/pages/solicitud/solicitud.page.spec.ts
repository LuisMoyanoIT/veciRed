import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { SolicitudPage } from './solicitud.page';
import { By } from '@angular/platform-browser';

describe('SolicitudPage', () => {
  let component: SolicitudPage;
  let fixture: ComponentFixture<SolicitudPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ SolicitudPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //INICIO VALIDACIONES ACEPTAR VECINO
 

    
   it('Vecino aceptado exitosamente', () => {
     //creamos una solicitud para testear el boton
     //recordemos que solo si existen solicitudes se muestra el boton de aceptar
     //por lo tanto debemos crear una solicitud
    component.solicitudes[0] = {
      _id: '61fa9d36bb87294af09bbc09',
      comunidad: {
        nombreComunidad: 'VeciRed'
      },
      usuario: { nombre: 'Juan gabriel'},
      mensaje: 'aceptame porfavor'
    }
    //con detectChanges la prueba unitaria reconoce nuestros cambios 

    fixture.detectChanges();

    //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
    spyOn(component, 'aceptarVecino').and.returnValue();
    //spyOn(component, 'aceptarVecino');
    //capturamo el boton por css como es de costumbre
    let button = fixture.debugElement.nativeElement.querySelector('.aceptarVecino');
    
    button.click();


    fixture.whenStable().then(() => {
      //espera que la funcion haya sido llamada
      expect(component.aceptarVecino).toHaveBeenCalled();
    });
  
  });
   //FIN VALIDACIONES ACEPTAR VECINO


   //INICIO VALIDACIONES RECHAZAR VECINO
   it('Vecino rechazado exitosamente', (() => {
    //creamos una solicitud para testear el boton
    //recordemos que solo si existen solicitudes se muestra el boton de aceptar
    //por lo tanto debemos crear una solicitud
   component.solicitudes[0] = {
     _id: '61fa9d36bb87294af09bbc09',
     comunidad: {
       nombreComunidad: 'VeciRed'
     },
     usuario: { nombre: 'Juan gabriel'},
     mensaje: 'aceptame porfavor'
   }
   //con detectChanges la prueba unitaria reconoce nuestros cambios 

   fixture.detectChanges();

   //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
   //spyOn(component, 'rechazoVecino').and.callThrough();
   spyOn(component, 'aceptarVecino').and.callThrough();
   //capturamo el boton por css como es de costumbre
   let button = fixture.debugElement.nativeElement.querySelector('.rechazarVecino');
   
   button.click();


   fixture.whenStable().then(() => {
     //espera que la funcion haya sido llamada
     expect(component.rechazoVecino).toHaveBeenCalled();
   });
 
 }));

   
   //RECHAZAR VALIDACIONES RECHAZAR VECINO

  
  
  }); //fin
