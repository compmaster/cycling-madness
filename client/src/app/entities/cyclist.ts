import { DateUtils } from '../utils/date.utils';
import { CyclistType } from '../enums/cyclist-type.enum';
import { Bike } from './bike';
import { Ride } from './ride';
import { Team } from './team';

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

	get age(): number {
		return DateUtils.getAge(this.bornDate);
	}
	
	get team(): Team {
		return this.teams[0];
	}
	
	get typeName(): string {
		return CyclistType[this.type];
	}
}