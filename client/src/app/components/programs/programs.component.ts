import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, ConfirmationService } from 'primeng/primeng';
import { Program } from '../../entities/program';
import { AlertService } from '../../services/alert.service';
import { ProgramService } from '../../services/program.service';

@Component({
	selector: 'cm-programs',
	templateUrl: './programs.component.html',
	styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

	programs: Program[] = [];
	programActions: MenuItem[];
	selectedPrograms: Program[];

	constructor(
		private programService: ProgramService,
		private confirmationService: ConfirmationService,
		private alertService: AlertService,
		private router: Router) { }

	ngOnInit() {
		this.loadPrograms();
	}

	loadPrograms() {
		this.programService.getPrograms().subscribe(programs => this.programs = programs);
	}
	
	edit(program: Program) {
		this.router.navigate(['edit-program/', program.id]);
	}
	
	remove(program: Program): void {
		this.confirmationService.confirm({
			message: 'Do you want to delete ' + program.name + ' and all etudes?',
			header: program.name,
			icon: 'fa fa-trash',
			accept: () => { this._remove(program); }
		});
	}

	_remove(program: Program): void {
		this.programService.remove(program).subscribe(() =>
			this.alertService.success('Program ' + program.name + ' deleted.', program.name)
		);
	}

}
