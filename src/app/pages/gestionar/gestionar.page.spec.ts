import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { GestionarPage } from './gestionar.page';

describe('GestionarPage', () => {
  let component: GestionarPage;
  let fixture: ComponentFixture<GestionarPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ GestionarPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //INICIO VALIDACION CAMBIAR ROL
  it('Rol actualizado exitosamente', (() => {
    //creamos una solicitud para testear el boton
    //recordemos que solo si existen solicitudes se muestra el boton de aceptar
    //por lo tanto debemos crear una solicitud
    var Comunidades = {
      _id: '61ac3ce9c27143f6fe782cf0',
      nombreComunidad: 'VeciRed',
      descripcion: 'VeciREd ',
      region: 'Bío-Bío',
      comuna: 'Arauco'
      
    }
   component.usuarios[0] = {
     _id: '61fa9d36bb87294af09bbc09',
      nombre: 'Juan gabriel',
      rol: [1],
      comunidad : [Comunidades], 

   }

   component.position = 0;
   //con detectChanges la prueba unitaria reconoce nuestros cambios 

   fixture.detectChanges();

   //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
   //spyOn(component, 'rechazoVecino').and.callThrough();
   spyOn(component, 'actualizarRol');
   //capturamo el boton por css como es de costumbre
   let button = fixture.debugElement.nativeElement.querySelector('.actualizarRol');
   
   button.click();


   fixture.whenStable().then(() => {
     //espera que la funcion haya sido llamada
     expect(component.actualizarRol).toHaveBeenCalled();
   });
 
 }));


  //FIN VALIDACION CAMBIAR ROL
});
