import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ConfirmationService } from 'primeng/primeng';
import { Team } from '../../entities/team';
import { AlertService } from '../../services/alert.service';
import { TeamService } from '../../services/team.service';

@Component({
	selector: 'cm-teams',
	templateUrl: './teams.component.html',
	styleUrls: ['./teams.component.css'],
	providers: [ConfirmationService]
})
export class TeamsComponent implements OnInit {

	teams: Team[] = [];
	teamActions: MenuItem[];
	selectedTeams: Team[];

	constructor(
		private teamService: TeamService,
		private confirmationService: ConfirmationService,
		private alertService: AlertService,
		private router: Router) { }

	ngOnInit() {
		this.loadTeams();
	}

	loadTeams() {
		this.teamService.getTeams().then(teams => this.teams = teams);
	}

	edit(team: Team) {
		this.router.navigate(['edit-team/', team.id]);
	}

	remove(team: Team): void {
		this.confirmationService.confirm({
			message: 'Do you want to delete ' + team.name + ' forever?',
			header: team.name,
			icon: 'fa fa-trash',
			accept: () => { this._remove(team); }
		})
	}

	_remove(team: Team): void {
		this.teamService.remove(team);
		this.alertService.success('Cyclist ' + team.name + ' deleted.', team.name);
	}

}
