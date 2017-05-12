import { Entity } from '../interfaces/entity';
import { Season } from './season';
import { Etude } from './etude';

export class Program implements Entity {
	id: number;
	name: string;
	description: string;
	seasons: Season[];
	etudes: Etude[];
}
