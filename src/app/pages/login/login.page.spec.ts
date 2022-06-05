import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FormsModule } from '@angular/forms';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule, RouterTestingModule, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /* it('should create', () => {
    expect(component).toBeTruthy();
  }); */

  /* it('Sesión iniciada', () => {

    component.User = {
      email: 'test3@test3.com',
      password: '123456'
    };

    var resultado = component.login();
    fixture.detectChanges();
    expect(resultado).toEqual(true);
  }); */

  it('Correo requerido', () => {

    component.User = {
      email: '',
      password: '123456'
    };

    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });

  it('Contraseña requerida', () => {

    component.User = {
      email: 'test3@test3.com',
      password: ''
    };

    var resultado = component.validacion();
    fixture.detectChanges();
    expect(resultado).not.toEqual(null);
  });
});
