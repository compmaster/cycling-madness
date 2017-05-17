import { TestBed, inject } from '@angular/core/testing';

import { TeamResolverService } from './team-resolver.service';

describe('TeamResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeamResolverService]
    });
  });

  it('should ...', inject([TeamResolverService], (service: TeamResolverService) => {
    expect(service).toBeTruthy();
  }));
});
