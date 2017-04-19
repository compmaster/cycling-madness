import { Team } from '../entities/team';

export const TEAMS: Team[] = [];

const NAMES: string[] = [
	'Thunderstorm MTB Team',
	'Falcon Road Team',
	'Heavy Metal',
	'Fast As Hell',
	'666'
];
const TYPES: number[] = [0,1,2,3,4,5];
const METHODS: number[] = [0,1,2,2,2];

function generateRandomTeams() {
	shuffle(TYPES);
	shuffle(METHODS);
	for (let i = 0; i < NAMES.length; ++i) {
		let team = new Team();
		team.id = i + 1,
		team.name = NAMES[i],
		team.type = TYPES[i],
		team.trainingMethod = METHODS[i];
		TEAMS.push(team);
	}
	shuffle(TEAMS);
}

function shuffle(array: Array<any>) {
	for (let i = array.length - 1, j = 0; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

generateRandomTeams();
