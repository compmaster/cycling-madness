import { TeamType } from '../enums/team-type.enum';

export class Team {
	id: number;
	name: string;
	type: TeamType;
	info: string;
}
