import { Program } from './program';
import { Entity } from '../interfaces/entity';

export class Aspect implements Entity {
	id: number;
	program: Program;
	name: string;
	description: string;
}