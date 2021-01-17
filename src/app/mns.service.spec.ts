import { TestBed } from '@angular/core/testing';

import { MnsService } from './mns.service';

describe('MnsService', () => {
  let service: MnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
