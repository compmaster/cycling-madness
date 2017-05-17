import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Team } from '../../entities/team';
import { TeamType } from '../../enums/team-type.enum';
import { TeamService } from '../../services/team.service';
import { TrainingMethod } from '../../enums/training-method.enum';
import { AlertService } from '../../services/alert.service';
import { SelectItem } from 'primeng/primeng';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'cm-edit-team',
	templateUrl: './edit-team.component.html',
	styleUrls: ['./edit-team.component.css']
})
export class EditTeamComponent implements OnInit {

	team: Team;
	types: SelectItem[];
	trainingMethods: SelectItem[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private teamService: TeamService,
		private alertService: AlertService) { }

	ngOnInit() {
		this.fillTeamTypes();
		this.fillTrainingMethods();
		this.initTeam();
	}

	fillTeamTypes() {
		this.types = [
			{ label: 'Trip', value: TeamType.TRIP },
			{ label: 'MTB', value: TeamType.MTB_AMATEUR },
			{ label: 'Road', value: TeamType.ROAD_AMATEUR },
			{ label: 'Professional MTB', value: TeamType.MTB_PROFESSIONAL },
			{ label: 'Professional Road', value: TeamType.ROAD_PROFESSIONAL }
		];
	}

	fillTrainingMethods() {
		this.trainingMethods = [
			{ label: 'Self', value: TrainingMethod.SELF },
			{ label: 'Coach', value: TrainingMethod.COACH },
			{ label: 'SCRUM', value: TrainingMethod.SCRUM }
		]
	}

	initTeam() {
		this.createDefaultTeam();
		this.loadTeamForEdit();
	}

	createDefaultTeam() {
		this.team = new Team();
		this.team.type = TeamType.TRIP;
		this.team.trainingMethod = TrainingMethod.SCRUM;
	}

	loadTeamForEdit() {
		this.route.data.subscribe((data: { team: Team }) => {
			if(data && data.team) {
				this.team = data.team;
			}
		});
	}

	save() {
		if (this.team.id) {
			this.teamService.update(this.team).subscribe(() => this.onUpdated());
		} else {
			this.teamService.create(this.team).subscribe(() => this.onCreated());
		}
	}

	onCreated() {
		this.alertService.success("Team created successfully.", this.team.name);
		this.router.navigate(['teams']);
	}

	onUpdated() {
		this.alertService.success("Team updated successfully.", this.team.name);
		this.router.navigate(['teams']);
	}

}
