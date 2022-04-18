import { TestBed } from '@angular/core/testing';

import { ArtisteGuard } from './artiste.guard';

describe('ArtisteGuard', () => {
  let guard: ArtisteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ArtisteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
