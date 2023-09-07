import { TestBed } from '@angular/core/testing';

import { WebsockitserviceService } from './websockitservice.service';

describe('WebsockitserviceService', () => {
  let service: WebsockitserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsockitserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
