import {CyclistType} from '../enums/cyclist-type.enum';
import {Bike} from './bike';
import {Ride} from './ride';
import {Team} from './team';

export class Cyclist {
	id: number;
	firstName: string;
	lastName: string;
	bornDate: Date;
	weight: number;
	type: CyclistType;
	bikes: Bike[];
	rides: Ride[];
	teams: Team[];
}