import { EtudeType } from '../enums/etude-type.enum';

export class Etude {
	id: number;
	category: string;
	symbol: string;
	name: string;
	type: EtudeType;
	/* to be discussed - intervals and sprints as separate entity?
	series: number;
	intervals: number;
	intervalTime: number;
	intervalPause: number;
	seriesPause: number;
	distance: number;
	slope: number; */
	
	get isInterval(): boolean {
		return this.type == EtudeType.INTERVAL;
	}
	
	get isSprint(): boolean {
		return this.type == EtudeType.SPRINT;
	}
}