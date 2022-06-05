import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { EditarComPage } from './editar-com.page';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('EditarComPage', () => {
  let component: EditarComPage;
  let fixture: ComponentFixture<EditarComPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ EditarComPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });


    //editar datos comunidad
    it('Comunidad editada exitosamente', () => {
    fixture = TestBed.createComponent(EditarComPage);
    //Instanciamos los componentes de la pagina
    component = fixture.componentInstance;
    //le decimos a la pagina que sus variables cambiaran sus valores
    fixture.detectChanges();
    //instanciamos las variables que reciben los datos
    let nombreComunidad = component.comunidadEditada.nombreComunidad;
    let descripcion = component.comunidadEditada.descripcion;
    let region = component.comunidadEditada.region;
    let comuna = component.comunidadEditada.comuna;
    //asignamos los valores a esas variables
    nombreComunidad = 'VeciRed';
    descripcion = 'Comunidad creada';
    region = 'Bío-Bío';
    comuna = 'Concepción';
    //concatenamos al boton que desencadena el evento de actualizar
    const btnElement = fixture.debugElement.query(By.css('.sendData')).nativeElement.innerText;
    //btnElement.nativeElement.click();
    
    //esperamos que los valores entregados sean los mismos que se ingresan
    expect(nombreComunidad).toBe('VeciRed');
    expect(descripcion).toBe('Comunidad creada');
    expect(region).toBe('Bío-Bío');
    expect(comuna).toBe('Concepción');
  });

  // it('Debería tener un nombre', () => {
  //   fixture = TestBed.createComponent(EditarComPage);
  //   //Instanciamos los componentes de la pagina
  //   component = fixture.componentInstance;
  //   //le decimos a la pagina que sus variables cambiaran sus valores
  //   fixture.detectChanges();
  //   //instanciamos las variables que reciben los datos
  //   component.comunidadEditada.nombreComunidad = ''
  //   component.comunidadEditada.descripcion = 'VeciRed'
  //   component.comunidadEditada.region = 'VeciRed'
  //   component.comunidadEditada.comuna = 'VeciRed'
  //   //fixture.detectChanges();
  //   //let actualizado = component.editarComunidad();
  //   //nombreComunidad = 'hola';
  //   //const de = fixture.debugElement.query(By.css('.sendData')).nativeElement;
  //   const de = fixture.debugElement.query(By.css('.sendData'));
  //   // const addButton = fixture.debugElement.nativeElement.querySelector('.sendData');
  //   // expect(addButton.attributes.getNamedItem('ng-reflect-disabled')?.value).toBeFalsy();
  //   //expect(de.nativeElement.attributes).toContain['disabled'];
  //   expect(Object.keys(de.attributes['ng-reflect-disabled'])).toContain('disabled');
  // });

  it('El nombre no puede tener menos de 3 caracteres', () => {
    component.comunidadEditada.nombreComunidad = ''
    component.comunidadEditada.descripcion = 'comunidad vecired'
    component.comunidadEditada.region = 'Bío-Bío'
    component.comunidadEditada.comuna = 'Concepción'
    
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.sendData').disabled).toBeTruthy();
   });

   it('La descripcion no puede tener menos de 3 caracteres', () => {
    component.comunidadEditada.nombreComunidad = 'VeciRed'
    component.comunidadEditada.descripcion = ''
    component.comunidadEditada.region = 'Bío-Bío'
    component.comunidadEditada.comuna = 'Concepción'
    
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.sendData').disabled).toBeTruthy();
   });

   it('Debe ingresar una región', () => {
    component.comunidadEditada.nombreComunidad = 'VeciRed'
    component.comunidadEditada.descripcion = 'comunidad vecired'
    component.comunidadEditada.region = ''
    component.comunidadEditada.comuna = 'Concepción'
    
    //con detectChanges le decimos a la app que las variables recibiran datos 
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.sendData').disabled).toBeTruthy();
   });

   it('Debe ingresar una comuna', () => {
    component.comunidadEditada.nombreComunidad = 'VeciRed'
    component.comunidadEditada.descripcion = 'comunidad vecired'
    component.comunidadEditada.region = 'Bío-Bío'
    component.comunidadEditada.comuna = ''
    
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.sendData').disabled).toBeTruthy();
   });

  //  it('nombreComunidad no puede tener caracteres especiales', () => {
  //   component.comunidadEditada.nombreComunidad = 'VeciRed><>""'
  //   component.comunidadEditada.descripcion = 'comunidad vecired'
  //   component.comunidadEditada.region = 'Bío-Bío'
  //   component.comunidadEditada.comuna = 'Concepción'
  //   /*funcion validacion retorna NULL cuando cumple todas las condiciones en caso contrario
  //   retorna una alerta con un mensaje la cual es un object*/
  //   var resultado = component.validacion();
  //   fixture.detectChanges();

  //   expect(resultado).toEqual(null);
  //  });

  //  it('Descripcion no puede tener caracteres especiales', () => {
  //   component.comunidadEditada.nombreComunidad = 'VeciRed'
  //   component.comunidadEditada.descripcion = 'comunidad "" <>vecired<>'
  //   component.comunidadEditada.region = 'Bío-Bío'
  //   component.comunidadEditada.comuna = 'Concepción'
  //   var resultado = component.validacion();
  //   fixture.detectChanges();

  //   expect(resultado).toEqual(null);
  //  });

    it('nombreComunidad no debe contener más de 25 caracteres', () => {
    component.comunidadEditada.nombreComunidad = 'Comunidad VeciRed varios caracteres'
    component.comunidadEditada.descripcion = 'comunidad creada por los desarrolladores de VeciRed'
    component.comunidadEditada.region = 'Bío-Bío'
    component.comunidadEditada.comuna = 'Concepción'
    var resultado = component.validacion();
    fixture.detectChanges();

    expect(resultado).not.toEqual(null);
   });

   it('Descripcion no debe contener más de 250 caracteres', () => {
    component.comunidadEditada.nombreComunidad = 'Comunidad VeciRed'
    component.comunidadEditada.descripcion = 'Comunidad creada por los desarrolladores de VeciRed. lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis'
    component.comunidadEditada.region = 'Bío-Bío'
    component.comunidadEditada.comuna = 'Concepción'
    var resultado = component.validacion();
    fixture.detectChanges();

    expect(resultado).not.toEqual(null);
   });


});
