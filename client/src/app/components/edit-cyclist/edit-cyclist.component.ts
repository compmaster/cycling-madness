import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Cyclist } from '../../entities/cyclist';
import { CyclistType } from '../../enums/cyclist-type.enum';
import { CyclistService } from '../../services/cyclist.service';
import { AlertService } from '../../services/alert.service';
import { SelectItem } from 'primeng/primeng';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

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
		this.route.params.filter(x => x['id']).switchMap((params: Params) => this.cyclistService
			.getCyclist(+params['id']))
			.subscribe((cyclist: Cyclist) => this.cyclist = cyclist);
	}
	
	save() {
		if(this.cyclist.id) {
			this.cyclistService.update(this.cyclist).subscribe(() => this.onUpdated());
		} else {
			this.cyclistService.create(this.cyclist).subscribe(() => this.onCreated());
		}
	}
	
	onCreated() {
		this.alertService.success("Cyclist created successfully.", this.cyclist.name);
		this.router.navigate(['cyclists']);
	}
	
	onUpdated() {
		this.alertService.success("Cyclist updated successfully.", this.cyclist.name);
		this.router.navigate(['cyclists']);
	}

}
