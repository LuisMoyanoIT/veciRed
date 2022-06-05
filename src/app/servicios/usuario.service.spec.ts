import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';

import { UsuarioService } from './usuario.service';

describe('UsuarioService', () => {
  let service: UsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Storage],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(UsuarioService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
