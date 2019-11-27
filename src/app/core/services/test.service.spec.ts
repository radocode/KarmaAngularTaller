import { TestBed } from '@angular/core/testing';

import { TestService } from './test.service';

describe('TestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service).toBeTruthy();
  });

  it('should send a message', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.mandarMensajeMayusculas('hola')).toBe('HOLA');
  });

  it('should send a chao message', () => {
    const service: TestService = TestBed.get(TestService);
    expect(service.mandarMensajeMayusculas('chao')).toBe('BYE');
  });
});
