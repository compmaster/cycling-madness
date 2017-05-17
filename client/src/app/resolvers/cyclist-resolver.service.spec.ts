import { TestBed, inject } from '@angular/core/testing';

import { CyclistResolverService } from './cyclist-resolver.service';

describe('CyclistResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CyclistResolverService]
    });
  });

  it('should ...', inject([CyclistResolverService], (service: CyclistResolverService) => {
    expect(service).toBeTruthy();
  }));
});
