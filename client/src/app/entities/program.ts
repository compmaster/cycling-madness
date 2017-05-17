import { Entity } from '../interfaces/entity';
import { Aspect } from './aspect';
import { Period } from './period';
import { Etude } from './etude';

export class Program implements Entity {
	id: number;
	name: string;
	description: string;
	aspects: Aspect[];
	periods: Period[];
	etudes: Etude[];
}
