import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { EditarAcuerdoPage } from './editar-acuerdo.page';

describe('EditarAcuerdoPage', () => {
  let component: EditarAcuerdoPage;
  let fixture: ComponentFixture<EditarAcuerdoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer, Camera],
      declarations: [ EditarAcuerdoPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAcuerdoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  it('Título no deber contener menos de 3 caracteres ingresados', () => {

    component.acuerdo = {
      "titulo":"V",
      "descripcion":"Votación de la comunidad",
      "fecha": "2022-03-07",
      "hora": "20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Día requerido', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha": null,
      "hora": "20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Hora requerida', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha": "2022-03-07",
      "hora": null,
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Duración requerida', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":null,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Descripción no deber contener menos de 3 caracteres ingresados', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"V",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Opciones requerida', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Se debe ingresar un título valido', () => {

    component.acuerdo = {
      "titulo":"<>Votación VeciRed<>",
      "descripcion":"Votación de la comunidad",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('No se debe seleccionar un día anterior al actual', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha":"2021-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Duración menor a 1 hora', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":0,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Duración mayor a 48 horas', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":50,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Se debe ingresar una descripción valida', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"<>Votación de la comunidad<>",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Título no deber contener más de 30 caracteres ingresados', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed, lorem ipsum dolor",
      "descripcion":"Votación de la comunidad",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La descripción no deber contener más de 250 caracteres ingresados', () => {

    component.acuerdo = {
      "titulo":"Votación VeciRed",
      "descripcion":"Votación de la comunidad, lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis",
      "fecha":"2022-03-07",
      "hora":"20:00",
      "duracion":2,
      "opciones":[{"titulo":"OP1","descripcion":"opción 1","votos":0}, {"titulo":"OP2","descripcion":"opción 2","votos":0}],
    }
    
    fixture.detectChanges();
    var resultado = component.validacion();
    console.log(resultado);
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });
});
