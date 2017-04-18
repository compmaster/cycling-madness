import { Component, OnInit } from '@angular/core';
import { MenuItem, ConfirmationService, Message } from 'primeng/primeng';
import { Cyclist } from '../../entities/cyclist';
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
	messages: Message[] = [];

	constructor(private cyclistService: CyclistService, private confirmationService: ConfirmationService) { }

	ngOnInit() {
		this.loadCyclists();
	}

	loadCyclists() {
		this.cyclistService.getCyclists().then(cyclists => this.cyclists = cyclists);
	}

	edit() {
		alert('test');
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
		this.cyclistService.remove(cyclist);
		this.messages.push({
			severity: 'info',
			summary: cyclist.name,
			detail: 'Cyclist ' + cyclist.name + ' deleted.'
		});
	}

}
