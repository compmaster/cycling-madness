import { Component, OnInit } from '@angular/core';
import { Cyclist } from '../../entities/cyclist';
import { CyclistService } from '../../services/cyclist.service';

@Component({
	selector: 'cm-cyclists',
	templateUrl: './cyclists.component.html',
	styleUrls: ['./cyclists.component.css']
})
export class CyclistsComponent implements OnInit {

	cyclists: Cyclist[] = [];

	constructor(private cyclistService: CyclistService) { }

	ngOnInit() {
		this.loadCyclists();
	}

	loadCyclists() {
		this.cyclistService.getCyclists().then(cyclists => this.cyclists = cyclists);
	}

}
