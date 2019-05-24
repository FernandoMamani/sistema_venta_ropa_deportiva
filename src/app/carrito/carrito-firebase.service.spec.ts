import { TestBed } from '@angular/core/testing';

import { CarritoFirebaseService } from './carrito-firebase.service';

describe('CarritoFirebaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarritoFirebaseService = TestBed.get(CarritoFirebaseService);
    expect(service).toBeTruthy();
  });
});
