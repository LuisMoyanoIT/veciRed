import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FormsModule, NgForm } from '@angular/forms';

import { RegistroPage } from './registro.page';
import { Usuario } from '../../interfaces/interfaces';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ RegistroPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  //   expect(component).toBeDefined();
  //   expect(component).toBeInstanceOf(RegistroPage);
  //   expect(component.userRegistro.fechaNacimiento).toBe('');
  // });

  // /* it('Se redirige a login', () => {
  //   component.login();
  //   expect(component).toBeTruthy();
  // }); */

  // it('Se registra a un usuario', () => {
    
  //   component.registro();
  //   expect(component).toBeTruthy();
  // });
  /* it('El nombre no deber contener menos de 3 caracteres ingresados', () => {

    component.userRegistro = {
      nombre: 'Fr',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.com',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('El nombre no deber contener más de 50 caracteres ingresados', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez lorem ipsum dolor sit amet consectetur',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.com',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Se debe ingresar un nombre valido', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez 123',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.com',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Debe ingresar una fecha de nacimiento', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  null,
      email: 'francisco.sanches@gmail.com',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La fecha de nacimiento no puede superar a la fecha actual', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  '2022-04-02',
      email: 'francisco.sanches@gmail.com',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Debe ingresar un correo valido', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanchesgmail.com',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Debe ingresar un correo valido', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.c',
      password: '123456',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La contraseña no debe tener menos de 6 caracteres', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.com',
      password: '1234',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('La contraseña no debe tener más de 100 caracteres', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.com',
      password: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. In a ante auctor, consectetur quam at, tempus tellus',
    }
    component.repitaPassword = '123456'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Las contraseñas deben coincidir', () => {

    component.userRegistro = {
      nombre: 'Francisco Sánchez',
      fechaNacimiento:  '1988-03-02',
      email: 'francisco.sanches@gmail.com',
      password: '123456',
    }
    component.repitaPassword = '12345678'
    
    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

 */

});
