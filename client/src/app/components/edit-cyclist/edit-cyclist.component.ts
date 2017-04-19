import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cyclist } from '../../entities/cyclist';
import { CyclistType } from '../../enums/cyclist-type.enum';
import { CyclistService } from '../../services/cyclist.service';
import { AlertService } from '../../services/alert.service';
import { SelectItem } from 'primeng/primeng';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'cm-edit-cyclist',
	templateUrl: './edit-cyclist.component.html',
	styleUrls: ['./edit-cyclist.component.css']
})
export class EditCyclistComponent implements OnInit {

	cyclist: Cyclist;
	types: SelectItem[];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private cyclistService: CyclistService,
		private alertService: AlertService) { }

	ngOnInit() {
		this.fillCyclistTypes();
		this.initCyclist();
	}
	
	fillCyclistTypes() {
		this.types = [
			{ label: 'Trip', value: CyclistType.TRIP },
			{ label: 'Road', value: CyclistType.ROAD },
			{ label: 'Mountain', value: CyclistType.MTB },
			{ label: 'Coach', value: CyclistType.COACH },
			{ label: 'Admin', value: CyclistType.ADMIN }
		];
	}
	
	initCyclist() {
		this.createDefaultCyclist();
		this.loadCyclistForEdit();
	}
	
	createDefaultCyclist() {
		this.cyclist = new Cyclist();
		this.cyclist.type = CyclistType.TRIP;
	}
	
	loadCyclistForEdit() {
		this.route.params.switchMap((params: Params) => this.cyclistService
			.getCyclist(+params['id'])
			.then((cyclist: Cyclist) => { this.cyclist = cyclist })
			.catch((reason: any) => console.log(reason))
		).subscribe();
	}
	
	save() {
		this.cyclistService.save(this.cyclist).then(() => {
			this.alertService.success("Cyclist saved");
			this.router.navigate(['cyclists']);
		});
	}

}
