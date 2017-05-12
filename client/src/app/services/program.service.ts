import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Program } from '../entities/program';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProgramService {

	constructor(private api: ApiService<Program>) { }

	getPrograms(): Observable<Program[]> {
		return this.api.getAll('programs');
	}
	
	getProgram(id: number): Observable<Program> {
		return this.api.getOne('programs', id);
	}
	
	remove(program: Program): Observable<Response> {
		return this.api.deleteOne('programs', program);
	}
	
	update(program: Program): Observable<Response> {
		return this.api.updateOne('programs', program);
	}
	
	create(program: Program): Observable<Response> {
		return this.api.createOne('programs', program);
	}

}
