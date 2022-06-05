import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { EditarOpcionesPage } from './editar-opciones.page';

describe('EditarOpcionesPage', () => {
  let component: EditarOpcionesPage;
  let fixture: ComponentFixture<EditarOpcionesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer],
      declarations: [ EditarOpcionesPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarOpcionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  
  
  it('La opción 1 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='S';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 1 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad, lorem ipsum dolor sit';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 1 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad<>';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 1 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='M';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 1 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 1 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación<>';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 2 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='L';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 2 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza, lorem ipsum dolor sit';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 2 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza<>';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 2 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='M';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 2 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 2 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros<>';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 3 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='P';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 3 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad, lorem ipsum dolor sit';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas, lorem ipsum dolor sit amet';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 3 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad<>';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas<>';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 3 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='P';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 3 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 3 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas<>';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 4 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='B';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 4 no deber contener más de 30 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad, lorem ipsum dolor sit';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches, lorem ipsum dolor sit amet';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La opción 4 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad<>';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches<>';
    component.opcion[3]['descripcion']='Arreglo de baches';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 4 no deber contener menos de 3 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='A';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 4 no deber contener más de 250 caracteres ingresados', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnisx';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción 4 ingresada debe ser valida', () => {

    component.contador = 2;
    component.opcion[0]['titulo']='Seguridad';
    component.opcion[0]['descripcion']='Mayor iluminación';
    component.opcion[1]['titulo']='Limpieza';
    component.opcion[1]['descripcion']='Mas basureros';
    component.opcion[2]['titulo']='Plazas';
    component.opcion[2]['descripcion']='Plazas recreativas';
    component.opcion[3]['titulo']='Baches';
    component.opcion[3]['descripcion']='Arreglo de baches<>';
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });
});
