import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { OpcionesPage } from './opciones.page';

describe('OpcionesPage', () => {
  let component: OpcionesPage;
  let fixture: ComponentFixture<OpcionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer],
      declarations: [ OpcionesPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(OpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  /* it('Enviando opciones', () => {

    component.contador = 2;

    component.opcion1.titulo = 'asdasd1sa';
    component.opcion1.descripcion = 'asda2dsdsa';
    component.opcion1.votos = 0

    component.opcion2.titulo = 'asdasdsasda';
    component.opcion2.descripcion = 'asdasdasdsa';
    component.opcion2.votos = 0


    
    component.opcion1 = {
      titulo:'S',
      descripcion:'Mayor iluminación',
      votos: 0
    };

    component.opcion2 = {
      titulo:'Limpieza',
      descripcion:'Mas basureros',
      votos: 0
    };

    component.opcion3 = {
      titulo:'Plazas',
      descripcion:'Plazas recreativas',
      votos: 0
    };

    component.opcion4 = {
      titulo:'Baches',
      descripcion:'Arreglo de baches',
      votos: 0
    };


    //component.ngOnInit();
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.sendData').disabled).toBeFalsy();
  }); */

  /* 
  it('La opción 1 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='S';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 1 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad, lorem ipsum dolor sit';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 1 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad<>';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 1 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='M';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 1 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 1 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación<>';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 2 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='L';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 2 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza, lorem ipsum dolor sit';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 2 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza<>';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 2 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='M';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 2 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 2 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros<>';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 3 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='P';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 3 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad, lorem ipsum dolor sit';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas, lorem ipsum dolor sit amet';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 3 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad<>';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas<>';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 3 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='P';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 3 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 3 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas<>';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 4 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='B';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 4 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad, lorem ipsum dolor sit';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches, lorem ipsum dolor sit amet';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 4 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad<>';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches<>';
    component.opcion4.descripcion='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 4 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='A';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 4 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnisx';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 4 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion1.titulo='Seguridad';
    component.opcion1.descripcion='Mayor iluminación';
    component.opcion2.titulo='Limpieza';
    component.opcion2.descripcion='Mas basureros';
    component.opcion3.titulo='Plazas';
    component.opcion3.descripcion='Plazas recreativas';
    component.opcion4.titulo='Baches';
    component.opcion4.descripcion='Arreglo de baches<>';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });
 */
});
