import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { BuscarComPage } from './buscar-com.page';

describe('BuscarComPage', () => {
  let component: BuscarComPage;
  let fixture: ComponentFixture<BuscarComPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ BuscarComPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarComPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('Verdadero si no viene mensaje', () => {

  //   component.solicitud.mensaje = '¡Hola!, me gustaria unirme a tu comunidad'
  //   const comunidad = {
  //     nombreComunidad: 'name',
  //     descripcion: 'hola',
  //     region: 'Bio-Bio',
  //     comuna: 'Arauco'
  //   }
  //   component.comunidades[0] = comunidad
    
  //   component.mostrarInputMensaje = true;
  //   var IndexOfelement = 1;
  //   component.position = IndexOfelement;
  //   fixture.detectChanges();
  //   expect(fixture.debugElement.nativeElement.querySelector('.buscarCom').disabled).toBeTruthy();
  //   //expect(fixture.debugElement.nativeElement.querySelector('#test').disabled).toBeTruthy();

  //  });
  

  /*INICIO VALIDACIONES REQUISITO ENVIAR SOLICITUD*/

   it('Mensaje no debe contener caracteres especiales', () => {
    component.solicitud.mensaje = '¡Hola!, me gustaria unirme a tu comunidad<h1>""'
    //component.solicitud.mensaje = '¡Hola!, me gustaria unirme a tu comunidad'
    fixture.detectChanges();
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('Mensaje no puede tener menos de 3 caracteres', () => {
    //component.solicitud.mensaje = ''
    component.solicitud.mensaje = '¡Hola!, me gustaria unirme a tu comunidad'
    fixture.detectChanges();
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('Solicitud enviada exitosamente', () => {
    component.solicitud.mensaje = '¡Hola!, me gustaria unirme a tu comunidad'
    fixture.detectChanges();
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).toEqual(null);
   });

   it('Mensaje no puede tener mas de 250 caracteres', () => {
    //component.solicitud.mensaje = ''
    component.solicitud.mensaje = 'Mensaje  de prueba. lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus nunc ut malesuada lobortis. Fusce sollicitudin efficitur dapibus. In vitae lectus sit amet nulla lobortis venenatis at at felis. Orci varius natoque penatibus et magnis'
    fixture.detectChanges();
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });



   /*FIN VALIDACIONES REQUISITO ENVIAR SOLICITUD*/

   /*INICIO VALIDACIONES REQUISITO BUSCAR COMUNIDAD*/

    /*boton searchComunity se encuentra desabilitado si nombreComunidad = '' o region = ''*/
   it('Debe ingresar un nombre de comunidad', () => {
    component.comunidad.nombreComunidad = ''
    component.comunidad.region = ''
    component.comunidad.comuna = 'Arauco'
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.searchComunity').disabled).toBeTruthy();
   });

   it('Seleccione una región', () => {
    component.comunidad.nombreComunidad = ''
    component.comunidad.region = ''
    component.comunidad.comuna = 'Arauco'
    fixture.detectChanges();
    expect(fixture.debugElement.nativeElement.querySelector('.searchComunity').disabled).toBeTruthy();
   });

   it('El nombre de la comunidad no debe contener caracteres especiales', () => {
    component.comunidad.nombreComunidad = '<h1>Los lirios<h1>'
    //component.comunidad.nombreComunidad = 'Los lirios'
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = 'Arauco'
    var resultado = component.validacionBuscarCom();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });


   it('El nombre de la comunidad no debe contener más de 30 caracteres', () => {
    component.comunidad.nombreComunidad = 'Nombre de una comunidad con más de 30 caracteres'
    //component.comunidad.nombreComunidad = 'Los lirios'
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = 'Arauco'
    var resultado = component.validacionBuscarCom();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
   });

   it('Búsqueda de comunidad exitosa', () => {
    component.comunidad.nombreComunidad = 'Los lirios'
    component.comunidad.region = 'Bío-Bío'
    component.comunidad.comuna = 'Arauco'
    var resultado = component.validacionBuscarCom();
    fixture.detectChanges();
    expect(resultado).toEqual(null);
   });









   /*FIN VALIDACIONES REQUISITO BUSCAR COMUNIDAD*/
});
