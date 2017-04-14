import { Injectable } from '@angular/core';
import { CYCLISTS } from '../data/test-cyclists';
import { Cyclist } from '../entities/cyclist';

@Injectable()
export class CyclistService {

  constructor() { }
  
  getCyclists(): Promise<Cyclist[]> {
	  return Promise.resolve(CYCLISTS);
  }
  
  remove(cyclist: Cyclist): void {
	  CYCLISTS.splice(CYCLISTS.findIndex(x => x.id === cyclist.id), 1);
  }

}
