import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { EditarAvisoPage } from './editar-aviso.page';

describe('EditarAvisoPage', () => {
  let component: EditarAvisoPage;
  let fixture: ComponentFixture<EditarAvisoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer, Camera],
      declarations: [ EditarAvisoPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarAvisoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('El título no puede tener menos de 3 caracteres', () => {
    component.avisoEdicion.titulo = ''
    component.avisoEdicion.descripcion= 'Aviso testing'
    component.avisoEdicion.tipoAviso = 3;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.editarAviso').disabled).toBeTruthy();
   });

   it('La descripción no puede tener menos de 3 caracteres', () => {
    component.avisoEdicion.titulo = 'aviso title'
    component.avisoEdicion.descripcion= ''
    component.avisoEdicion.tipoAviso = 3;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.editarAviso').disabled).toBeTruthy();
   });

   it('Debe seleccionar un tipo de aviso', () => {
    component.avisoEdicion.titulo = 'aviso title'
    component.avisoEdicion.descripcion= 'descripción de aviso'
    component.avisoEdicion.tipoAviso = 0;
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.editarAviso').disabled).toBeTruthy();
   });

   it('El título no debe incluir caracteres especiales', () => {
    component.avisoEdicion.titulo = '<h3>aviso title</h3>'
    //component.avisoEdicion.titulo = 'aviso title'
    component.avisoEdicion.descripcion= 'descripción de aviso'
    component.avisoEdicion.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('La descripción no debe incluir caracteres especiales', () => {
    component.avisoEdicion.titulo = 'aviso title'
    //component.avisoEdicion.descripcion= 'aviso unit testing'
    component.avisoEdicion.descripcion= '<h1>testing description</h1>'
    component.avisoEdicion.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('Aviso editado exitosamente', () => {
    component.avisoEdicion.titulo = 'aviso title'
    component.avisoEdicion.descripcion= 'aviso unit testing'
    component.avisoEdicion.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).toEqual(null);
   });

   it('El título no debe tener más de 30 caracteres', () => {
    component.avisoEdicion.titulo = 'titulo con mas de 30 caracteres'
    component.avisoEdicion.descripcion= 'unit testing description'
    //component.aviso.descripcion= 'unit testing description'
    component.avisoEdicion.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });


   it('La descripción no debe tener más de 250 caracteres', () => {
    component.avisoEdicion.titulo = 'unit testing title'
    component.avisoEdicion.descripcion= 'descripcion de prueba. lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis'
    //component.aviso.descripcion= 'unit testing description'
    component.avisoEdicion.tipoAviso = 5;
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);

    
   });

   

   
});
