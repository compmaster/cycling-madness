import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Team } from '../entities/team';
import { API_ENDPOINT } from '../app.config';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TeamService {

	constructor(private http: Http) { }
	
	getTeams(): Observable<Team[]> {
		return this.http.get(API_ENDPOINT + 'teams').map(response => response.json());
	}

	getTeam(id: number): Observable<Team> {
		return this.http.get(API_ENDPOINT + 'teams/' + id).map(response => response.json());
	}
	
	remove(team: Team): Observable<Response> {
		return this.http.delete(API_ENDPOINT + 'teams/' + team.id);
	}
	
	update(team: Team): Observable<Response> {
		return this.http.put(API_ENDPOINT + 'teams/' + team.id, team);
	}
	
	create(team: Team): Observable<Response> {
		return this.http.post(API_ENDPOINT + 'teams', team);
	}

}
