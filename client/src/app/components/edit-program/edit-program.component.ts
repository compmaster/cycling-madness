import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Program } from '../../entities/program';
import { ProgramService } from '../../services/program.service';
import { AlertService } from '../../services/alert.service';

@Component({
	selector: 'cm-edit-program',
	templateUrl: './edit-program.component.html',
	styleUrls: ['./edit-program.component.css']
})
export class EditProgramComponent implements OnInit {

	program: Program;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private programService: ProgramService,
		private alertService: AlertService) { }

	ngOnInit() {
		this.initProgram();
	}
	
	initProgram() {
		this.createDefaultProgram();
		this.loadProgramForEdit();
	}
	
	createDefaultProgram() {
		this.program = new Program();
	}
	
	loadProgramForEdit() {
		this.route.data.subscribe((data: { program: Program }) => {
			if(data && data.program) {
				this.program = data.program;
			}
		});
	}
	
	save() {
		if (this.program.id) {
			this.programService.update(this.program).subscribe(() => this.onUpdated());
		} else {
			this.programService.create(this.program).subscribe(() => this.onCreated());
		}
	}
	
	onCreated() {
		this.alertService.success("Program created successfully.", this.program.name);
		this.router.navigate(['programs']);
	}
	
	onUpdated() {
		this.alertService.success("Program updated successfully.", this.program.name);
		this.router.navigate(['programs']);
	}

}
