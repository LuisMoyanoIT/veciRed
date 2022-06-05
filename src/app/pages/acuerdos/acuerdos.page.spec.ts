/* import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { AcuerdosPage } from './acuerdos.page';
import { AcuerdosService } from '../../servicios/acuerdos.service';
import { HttpHeaders } from '@angular/common/http';
import { of, Observable, Subject, observable } from 'rxjs';
import { Acuerdos, AcuerdosCreados, Comunidad, Usuario } from '../../interfaces/interfaces';

class AcuerdosSer{
  getAcuerdos(pull: boolean = false): Observable<AcuerdosCreados[]>{

    return of([
      { 
        ok: true,
        pagina: 1,
        acuerdosPublicados: [
          {
            "_id":"61f5a362d02c382eb05625b0",
            "titulo":"ads!22",
            "descripcion":"asdadad",
            "fecha":"2022-01-27","hora":"17:27",
            "duracion":10,
            "imagenAcuerdo":[],
            //"opciones":[{"titulo":"adasdsa","descripcion":"dasdasd","votos":{"$numberInt":"0"},"_id":{"$oid":"61f5e2904a8667616d79306d"}},{"titulo":"asdasdas","descripcion":"dasdas","votos":{"$numberInt":"0"},"_id":{"$oid":"61f5e2904a8667616d79306e"}},{"titulo":"asdasd","descripcion":"asdasdad","votos":{"$numberInt":"0"},"_id":{"$oid":"61f5e2904a8667616d79306f"}}],
            "votantes":[],
            //"usuario":"61ccdb27b2b150d3575f1f16",
           // "comunidad":"61ac3ce9c27143f6fe782cf0",
            "estado":1
          }
         
        ]
      }
    ])
  } 
}

ngMocks.defaultMock(AcuerdosService, () => ({
  list$: () => EMPTY,
}));

describe('AcuerdosPage', () => {
  let component: AcuerdosPage;
  let fixture: ComponentFixture<AcuerdosPage>;
 // let acuerdosPrueba: AcuerdosSer
 let acuerdosPruebaSpy: jasmine.SpyObj<AcuerdosService>;

  beforeEach(waitForAsync(() => {
   
    acuerdosPruebaSpy = jasmine.createSpyObj<AcuerdosService>('AcuerdosService', ['getAcuerdos']);

    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer, {provide: AcuerdosService, useValue: acuerdosPruebaSpy}],
      declarations: [ AcuerdosPage ],
      imports: [IonicModule.forRoot(), RouterTestingModule, HttpClientTestingModule ]
    }).compileComponents();

    fixture = TestBed.createComponent(AcuerdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //acuerdosPrueba = TestBed.inject(AcuerdosSer);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Llamar acuerdo', () => {
    //spyOn(acuerdosPrueba, 'getAcuerdos').and.callThrough();
    //const fakeList = new Observable<AcuerdosCreados>();

    var fakeList: AcuerdosCreados = [
      { 
        ok: true,
        pagina: 1,
        acuerdosPublicados: [
          {
            "_id":"61f5a362d02c382eb05625b0",
            
         
        
      }
    ]
  }
]; 
    
    acuerdosPruebaSpy.getAcuerdos.and.callThrough();
    component.scroll(true);
    expect(component.acuerdos.length).toBe(0);
    
  });
}); */
