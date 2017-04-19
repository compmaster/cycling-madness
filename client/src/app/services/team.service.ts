import { Injectable } from '@angular/core';
import { TEAMS } from '../data/test-teams';
import { Team } from '../entities/team';

@Injectable()
export class TeamService {

	constructor() { }
	
	getTeams(): Promise<Team[]> {
		console.log('getting teams');
		return Promise.resolve(TEAMS);
	}

	getTeam(id: number): Promise<Team> {
		console.log('getting team id=' + id);
		let team = TEAMS.find(x => x.id === id);
		if (team) {
			return Promise.resolve(team);
		} else {
			return Promise.reject("Could not find team with ID=" + id);
		}
	}
	
	remove(team: Team): void {
		TEAMS.splice(TEAMS.findIndex(x => x.id === team.id), 1);
	}
	
	save(team: Team): Promise<void> {
		if (team.id) {
			let existingCyclist = TEAMS.find(x => x.id === team.id);
			if (existingCyclist) {
				existingCyclist = team;
				return Promise.resolve();
			} else {
				return Promise.reject('Could not update team with ID=' + team.id);
			}
		} else {
			TEAMS.push(team);
			return Promise.resolve();
		}
	}

}
