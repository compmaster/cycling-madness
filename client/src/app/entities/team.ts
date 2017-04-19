import { TeamType } from '../enums/team-type.enum';
import { TrainingMethod } from '../enums/training-method.enum';

export class Team {
	id: number;
	name: string;
	type: TeamType;
	info: string;
	trainingMethod: TrainingMethod;
	
	get typeName(): string {
		return TeamType[this.type];
	}
	
	get trainingMethodName(): string {
		return TrainingMethod[this.trainingMethod];
	}
}
