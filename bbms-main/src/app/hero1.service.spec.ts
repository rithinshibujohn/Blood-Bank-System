import { TestBed } from '@angular/core/testing';

import { Hero1Service } from './hero1.service';

describe('Hero1Service', () => {
  let service: Hero1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hero1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
