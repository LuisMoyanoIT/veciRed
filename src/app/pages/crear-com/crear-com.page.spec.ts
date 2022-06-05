import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { CrearComPage } from './crear-com.page';
import { By } from '@angular/platform-browser';
describe('CrearComPage', () => {
  let component: CrearComPage;
  let fixture: ComponentFixture<CrearComPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ CrearComPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('El nombre no puede tener menos de 3 caracteres', () => {
    component.comunidad.nombreComunidad = ''
    component.comunidad.descripcion = 'comunidad vecired'
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = 'Concepción'
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearCom').disabled).toBeTruthy();
   });

   it('La descripcion no puede tener menos de 3 caracteres', () => {
    component.comunidad.nombreComunidad = 'VeciRed'
    component.comunidad.descripcion = ''
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = 'Concepción'
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearCom').disabled).toBeTruthy();
   });

   it('Debe ingresar una region', () => {
    component.comunidad.nombreComunidad = 'VeciRed'
    component.comunidad.descripcion = 'comunidad vecired'
    component.comunidad.region = ''
    component.comunidad.comuna = 'Concepción'
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearCom').disabled).toBeTruthy();
   });

   it('Debe ingresar una comuna', () => {
    component.comunidad.nombreComunidad = 'VeciRed'
    component.comunidad.descripcion = 'comunidad vecired'
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = ''
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearCom').disabled).toBeTruthy();
   });

    it('nombreComunidad no puede tener caracteres especiales', () => {
      //component.comunidad.nombreComunidad = '<h1>VeciRed</h1>'
      component.comunidad.nombreComunidad = 'VeciRed'
    component.comunidad.descripcion = 'comunidad vecired'
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = 'Concepción'
    /*funcion validacion retorna NULL cuando cumple todas las condiciones en caso contrario
    retorna una alerta con un mensaje la cual es un object*/
    var resultado = component.validacion();
    fixture.detectChanges();

    expect(resultado).toEqual(null);
   });

   it('Descripción no puede tener caracteres especiales', () => {
    component.comunidad.nombreComunidad = 'VeciRed'
  component.comunidad.descripcion = 'Comunidad VeciRed'
  component.comunidad.region = 'Bío-Bío'
  component.comunidad.comuna = 'Concepción'
  /*funcion validacion retorna NULL cuando cumple todas las condiciones en caso contrario
  retorna una alerta con un mensaje la cual es un object*/
  var resultado = component.validacion();
  fixture.detectChanges();

  expect(resultado).toEqual(null);
 });

 it('Comunidad creada exitosamente', () => {
  component.comunidad.nombreComunidad = 'VeciRed'
component.comunidad.descripcion = 'Comunidad VeciRed'
component.comunidad.region = 'Bío-Bío'
component.comunidad.comuna = 'Arauco'
/*funcion validacion retorna NULL cuando cumple todas las condiciones en caso contrario
retorna una alerta con un mensaje la cual es un object*/
var resultado = component.validacion();
fixture.detectChanges();

expect(resultado).toEqual(null);
});

it('nombreComunidad no debe contener más de 25 caracteres', () => {
  component.comunidad.nombreComunidad = 'Comunidad VeciRed varios caracteres'
  component.comunidad.descripcion = 'comunidad creada por los desarrolladores de VeciRed'
  component.comunidad.region = 'Bío-Bío'
  component.comunidad.comuna = 'Concepción'
  var resultado = component.validacion();
  fixture.detectChanges();

  expect(resultado).not.toEqual(null);
 });


 it('Descripcion no debe contener más de 250 caracteres', () => {
  component.comunidad.nombreComunidad = 'Comunidad VeciRed'
  component.comunidad.descripcion = 'Comunidad creada por los desarrolladores de VeciRed. lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis'
  component.comunidad.region = 'Bío-Bío'
  component.comunidad.comuna = 'Concepción'
  var resultado = component.validacion();
  fixture.detectChanges();

  expect(resultado).not.toEqual(null);
 });






  });
