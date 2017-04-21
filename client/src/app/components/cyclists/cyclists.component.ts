import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ConfirmationService } from 'primeng/primeng';
import { Cyclist } from '../../entities/cyclist';
import { AlertService } from '../../services/alert.service';
import { CyclistService } from '../../services/cyclist.service';

@Component({
	selector: 'cm-cyclists',
	templateUrl: './cyclists.component.html',
	providers: [ConfirmationService],
	styleUrls: ['./cyclists.component.css']
})
export class CyclistsComponent implements OnInit {

	cyclists: Cyclist[] = [];
	cyclistActions: MenuItem[];
	selectedCyclists: Cyclist[];

	constructor(
		private cyclistService: CyclistService,
		private confirmationService: ConfirmationService,
		private alertService: AlertService,
		private router: Router) { }

	ngOnInit() {
		this.loadCyclists();
	}

	loadCyclists() {
		this.cyclistService.getCyclists().subscribe(cyclists => this.cyclists = cyclists);
	}

	edit(cyclist: Cyclist) {
		this.router.navigate(['edit-cyclist/', cyclist.id]);
	}

	remove(cyclist: Cyclist): void {
		this.confirmationService.confirm({
			message: 'Do you want to delete ' + cyclist.name + ' forever?',
			header: cyclist.name,
			icon: 'fa fa-trash',
			accept: () => { this._remove(cyclist); }
		})
	}

	_remove(cyclist: Cyclist): void {
		this.cyclistService.remove(cyclist).subscribe(() =>
			this.alertService.success('Cyclist ' + cyclist.name + ' deleted.', cyclist.name)
		);
	}

}
