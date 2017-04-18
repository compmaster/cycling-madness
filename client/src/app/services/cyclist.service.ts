import { Injectable } from '@angular/core';
import { CYCLISTS } from '../data/test-cyclists';
import { Cyclist } from '../entities/cyclist';

@Injectable()
export class CyclistService {

	constructor() { }

	getCyclists(): Promise<Cyclist[]> {
		return Promise.resolve(CYCLISTS);
	}

	getCyclist(id: number): Promise<Cyclist> {
		console.log('getting cyclist id=' + id);
		let cyclist = CYCLISTS.find(x => x.id === id);
		if (cyclist) {
			return Promise.resolve(cyclist);
		} else {
			return Promise.reject("Could not find cyclist with ID=" + id);
		}
	}

	remove(cyclist: Cyclist): void {
		CYCLISTS.splice(CYCLISTS.findIndex(x => x.id === cyclist.id), 1);
	}

	save(cyclist: Cyclist): Promise<void> {
		if (cyclist.id) {
			let existingCyclist = CYCLISTS.find(x => x.id === cyclist.id);
			if (existingCyclist) {
				existingCyclist = cyclist;
				return Promise.resolve();
			} else {
				return Promise.reject('Could not update cyclist with ID=' + cyclist.id);
			}
		} else {
			CYCLISTS.push(cyclist);
			return Promise.resolve();
		}
	}

}
