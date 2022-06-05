import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';


import { ComunidadService } from './comunidad.service';

describe('ComunidadService', () => {
  let service: ComunidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(ComunidadService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
