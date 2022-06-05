import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { AcuerdoPublicadoComponent } from './acuerdo-publicado.component';

describe('AcuerdoPublicadoComponent', () => {
  let component: AcuerdoPublicadoComponent;
  let fixture: ComponentFixture<AcuerdoPublicadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer],
      declarations: [ AcuerdoPublicadoComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AcuerdoPublicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  it('Votación lanzada exitosamente', () => {

     //creamos una solicitud para testear el boton
    //recordemos que solo si existen solicitudes se muestra el boton de aceptar
    //por lo tanto debemos crear una solicitud

    component.acuerdoPublicado = {
    
      titulo:'Votación VeciRed',
      descripcion:'Votación de la comunidad',
      fecha:'2022-03-07',
      hora:'20:00',
      duracion:2,
      imagenAcuerdo: [],
      opciones: [{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
      comunidad: {},
      usuario: {}
      //comunidad: {"_id":"61ac3ce9c27143f6fe782cf0", "nombreComunidad":"Comunidad VeciRed", "descripcion":"Comunidad inicial administrada por los creadores de veciRed"},
      //usuario: {"_id":"61ccdb27b2b150d3575f1f16","imagenPerfil":"av-3.png"}
    }
    //con detectChanges la prueba unitaria reconoce nuestros cambios 
    component.formatearFecha();
    fixture.detectChanges();
 
    //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
    spyOn(component, 'lanzarVotacion').and.callThrough();
    
    //capturamo el boton por css como es de costumbre
    let button = fixture.debugElement.nativeElement.querySelector('.lanzarVotacion');
    
    button.click();
 
    fixture.whenStable().then(() => {
      //espera que la funcion haya sido llamada
      expect(component.lanzarVotacion).toHaveBeenCalled();
    });
 
  });

  
  it('Votación terminada exitosamente', () => {

    //creamos una solicitud para testear el boton
   //recordemos que solo si existen solicitudes se muestra el boton de aceptar
   //por lo tanto debemos crear una solicitud

   component.acuerdoPublicado = {
   
     titulo:'Votación VeciRed',
     descripcion:'Votación de la comunidad',
     fecha:'2022-03-07',
     hora:'20:00',
     duracion:2,
     imagenAcuerdo: [],
     opciones: [{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
     comunidad: {},
     usuario: {}
     //comunidad: {"_id":"61ac3ce9c27143f6fe782cf0", "nombreComunidad":"Comunidad VeciRed", "descripcion":"Comunidad inicial administrada por los creadores de veciRed"},
     //usuario: {"_id":"61ccdb27b2b150d3575f1f16","imagenPerfil":"av-3.png"}
   }
   //con detectChanges la prueba unitaria reconoce nuestros cambios 
   component.formatearFecha();
   fixture.detectChanges();

   //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
   spyOn(component, 'terminar').and.callThrough();
   
   //capturamo el boton por css como es de costumbre
   let button = fixture.debugElement.nativeElement.querySelector('.terminar');
   
   button.click();

   fixture.whenStable().then(() => {
     //espera que la funcion haya sido llamada
     expect(component.terminar).toHaveBeenCalled();
   });

 });

 it('Votación eliminada exitosamente', () => {

  //creamos una solicitud para testear el boton
  //recordemos que solo si existen solicitudes se muestra el boton de aceptar
  //por lo tanto debemos crear una solicitud

  component.acuerdoPublicado = {
 
    titulo:'Votación VeciRed',
    descripcion:'Votación de la comunidad',
    fecha:'2022-03-07',
    hora:'20:00',
    duracion:2,
    imagenAcuerdo: [],
    opciones: [{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    comunidad: {},
    usuario: {}
   //comunidad: {"_id":"61ac3ce9c27143f6fe782cf0", "nombreComunidad":"Comunidad VeciRed", "descripcion":"Comunidad inicial administrada por los creadores de veciRed"},
   //usuario: {"_id":"61ccdb27b2b150d3575f1f16","imagenPerfil":"av-3.png"}
  }
  //con detectChanges la prueba unitaria reconoce nuestros cambios 
  component.formatearFecha();
  fixture.detectChanges();

  //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
  spyOn(component, 'eliminar').and.callThrough();
  
  //capturamo el boton por css como es de costumbre
  let button = fixture.debugElement.nativeElement.querySelector('.eliminar');
  
  button.click();

  fixture.whenStable().then(() => {
    //espera que la funcion haya sido llamada
    expect(component.eliminar).toHaveBeenCalled();
  });

 });


});
