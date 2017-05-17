import { TestBed, inject } from '@angular/core/testing';

import { ProgramResolverService } from './program-resolver.service';

describe('ProgramResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProgramResolverService]
    });
  });

  it('should ...', inject([ProgramResolverService], (service: ProgramResolverService) => {
    expect(service).toBeTruthy();
  }));
});
