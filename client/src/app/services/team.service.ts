import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Team } from '../entities/team';
import { Observable } from 'rxjs/Rx';
import { ApiService } from '../services/api.service';

@Injectable()
export class TeamService {

	constructor(private api: ApiService<Team>) {}
	
	getTeams(): Observable<Team[]> {
		return this.api.getAll('teams');
	}

	getTeam(id: number): Observable<Team> {
		return this.api.getOne('teams', id);
	}
	
	remove(team: Team): Observable<Response> {
		return this.api.deleteOne('teams', team);
	}
	
	update(team: Team): Observable<Response> {
		return this.api.updateOne('teams', team);
	}
	
	create(team: Team): Observable<Response> {
		return this.api.createOne('teams', team);
	}

}
