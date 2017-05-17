import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProgramService } from '../services/program.service';
import { Program } from '../entities/program';

@Injectable()
export class ProgramResolverService implements Resolve<Program> {

	constructor(private programService: ProgramService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Program> {
		let id = route.params['id'];
		return this.programService.getProgram(id);
	}

}