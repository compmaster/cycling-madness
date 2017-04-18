import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cyclist } from '../../entities/cyclist';
import { CyclistType } from '../../enums/cyclist-type.enum';
import { CyclistService } from '../../services/cyclist.service';
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

	constructor(private route: ActivatedRoute, private cyclistService: CyclistService) { }

	ngOnInit() {
		this.fillCyclistTypes();
		this.createDefaultCyclist();
		this.route.params.switchMap((params: Params) => this.cyclistService
			.getCyclist(+params['id'])
			.then((cyclist: Cyclist) => this.cyclist = cyclist)
		);
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
	
	createDefaultCyclist() {
		this.cyclist = new Cyclist();
		this.cyclist.type = CyclistType.TRIP;
	}
	
	save() {
		this.cyclistService.save(this.cyclist);
	}

}
