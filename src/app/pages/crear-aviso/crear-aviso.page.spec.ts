import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { CrearAvisoPage } from './crear-aviso.page';

describe('CrearAvisoPage', () => {
  let component: CrearAvisoPage;
  let fixture: ComponentFixture<CrearAvisoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer, Camera],
      declarations: [ CrearAvisoPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearAvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('El título no puede tener menos de 3 caracteres', () => {
    component.aviso.titulo = ''
    component.aviso.descripcion= 'Aviso de testing'
    component.aviso.tipoAviso = 3;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearAviso').disabled).toBeTruthy();
   });

   it('La descripcion no puede tener menos de 3 caracteres', () => {
    component.aviso.titulo = 'unit testing title'
    component.aviso.descripcion= ''
    component.aviso.tipoAviso = 3;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearAviso').disabled).toBeTruthy();
   });

   it('Debe seleccionar un tipo de aviso', () => {
    component.aviso.titulo = 'unit testing title'
    component.aviso.descripcion= 'unit testing description'
    component.aviso.tipoAviso = 0;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearAviso').disabled).toBeTruthy();
   });

   it('El titulo no debe incluir caracteres especiales', () => {
    component.aviso.titulo = '<h1>unit testing title</h1>'
    //component.aviso.titulo = 'unit testing title'
    component.aviso.descripcion= 'unit testing description'
    component.aviso.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('La descripción no debe incluir caracteres especiales', () => {
    component.aviso.titulo = 'unit testing title'
    component.aviso.descripcion= '<h1>unit testing description</h1>'
    //component.aviso.descripcion= 'unit testing description'
    component.aviso.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('Aviso creado exitosamente', () => {
    component.aviso.titulo = 'unit testing title'
    component.aviso.descripcion= 'unit testing description'
    component.aviso.tipoAviso = 3;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.crearAviso').disabled).toBeFalsy();
   });


   it('El título no debe tener más de 30 caracteres', () => {
    component.aviso.titulo = 'titulo con mas de 30 caracteres'
    component.aviso.descripcion= 'unit testing description'
    //component.aviso.descripcion= 'unit testing description'
    component.aviso.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });


   it('La descripción no debe tener más de 250 caracteres', () => {
    component.aviso.titulo = 'unit testing title'
    component.aviso.descripcion= 'descripcion de prueba. lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis'
    //component.aviso.descripcion= 'unit testing description'
    component.aviso.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);

    
   });


});
