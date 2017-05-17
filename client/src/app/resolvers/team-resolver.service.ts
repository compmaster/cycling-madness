import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { TeamService } from '../services/team.service';
import { Team } from '../entities/team';

@Injectable()
export class TeamResolverService implements Resolve<Team> {

	constructor(private teamService: TeamService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Team> {
		let id = route.params['id'];
		return this.teamService.getTeam(id);
	}

}