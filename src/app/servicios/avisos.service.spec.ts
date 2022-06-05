import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Storage } from '@ionic/storage';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';

import { AvisosService } from './avisos.service';

describe('AvisosService', () => {
  let service: AvisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Storage, FileTransfer],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    service = TestBed.inject(AvisosService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
