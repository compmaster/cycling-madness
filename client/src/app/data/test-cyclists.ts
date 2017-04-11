import { Cyclist } from '../entities/cyclist';
import { CyclistType } from '../enums/cyclist-type.enum';

export const CYCLISTS: Cyclist[] = [];

//Source: https://www.behindthename.com/random
const NAMES: string[] = [
	'Geertruida Bonnaire',
	'Aldebrand Long',
	'Heilwig Van Denend',
	'Emanuel Paulson',
	'Christin Scordato',
	'Myrrine Yamauchi',
	'Carles Neal',
	'Patricie Bajusz',
	'Rúben Ambrogi',
	'Aesop Kopecky',
	'Ambre Abrahams',
	'Rahman Padovan',
	'Matjaž Vega',
	'Otto Sykora',
	'Jurian Fox',
	'Bonifacy Rudawski',
	'Aldona Wiater',
	'Agata Jeleń',
	'Gertruda Niemec',
	'Edmund Fabian',
	'Kunegunda Pasternak',
	'Witek Kijek',
	'Stefek Śniegowski',
	'Marcelina Pokorny',
	'Ela Zima',
	'Nina Sokołowska',
	'Hubert Mencher',
	'Kajetan Ślązak',
	'Fryderyk Lis',
	'Oliwia Lawniczak'
];

function getRandomBornDate() {
	let startDate = new Date(1918, 0, 1);
	let endDate = new Date(2012, 11, 1);
	return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

function getRandomWeight() {
	return Math.floor(Math.random() * (120 - 30)) + 30;
}

function generateRandomCyclists() {
	for (let i = 0; i < NAMES.length; ++i) {
		let names = NAMES[i].split(' ');
		let firstName = names.shift();
		let lastName = names.join(' ');
		let cyclist = new Cyclist();
		cyclist.id = i + 1,
		cyclist.firstName = firstName,
		cyclist.lastName = lastName,
		cyclist.bornDate = getRandomBornDate(),
		cyclist.weight = getRandomWeight(),
		cyclist.type = CyclistType.MTB,
		CYCLISTS.push(cyclist);
	}
	shuffle(CYCLISTS);
}

function shuffle(array: Array<any>) {
	for (let i = array.length - 1, j = 0; i > 0; i -= 1) {
		j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

generateRandomCyclists();
