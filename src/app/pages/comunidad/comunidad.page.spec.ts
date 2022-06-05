import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { ComunidadPage } from './comunidad.page';

describe('ComunidadPage', () => {
  let component: ComunidadPage;
  let fixture: ComponentFixture<ComunidadPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ ComunidadPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ComunidadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  //INICIO VALIDACIONES ABANDONAR COMUNIDAD
 
  it('Comunidad abandonada exitosamente', (() => {
    //creamos una solicitud para testear el boton
    //recordemos que solo si existen solicitudes se muestra el boton de aceptar
    //por lo tanto debemos crear una solicitud

   component.Comunidad[0] = {
     _id: '61fa9d36bb87294af09bbc09',
     
   }
   //con detectChanges la prueba unitaria reconoce nuestros cambios 

   fixture.detectChanges();

   //'aceptarVecino' es una funcion spyOn( component, 'funcion del js')
   spyOn(component, 'abandonarComunidad').and.callThrough();
   //spyOn(component, 'aceptarVecino');
   //capturamo el boton por css como es de costumbre
   let button = fixture.debugElement.nativeElement.querySelector('.abandonarComunidad');
   
   button.click();


   fixture.whenStable().then(() => {
     //espera que la funcion haya sido llamada
     expect(component.abandonarComunidad).toHaveBeenCalled();
   });



}) )

})
