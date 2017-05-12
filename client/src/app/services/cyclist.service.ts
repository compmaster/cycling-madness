import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Cyclist } from '../entities/cyclist';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CyclistService {

	constructor(private api: ApiService<Cyclist>) {}

	getCyclists(): Observable<Cyclist[]> {
		return this.api.getAll('cyclists');
	}

	getCyclist(id: number): Observable<Cyclist> {
		return this.api.getOne('cyclists', id);
	}

	remove(cyclist: Cyclist): Observable<Response> {
		return this.api.deleteOne('cyclists', cyclist);
	}

	update(cyclist: Cyclist): Observable<Response> {
		return this.api.updateOne('cyclists', cyclist);
	}

	create(cyclist: Cyclist): Observable<Response> {
		return this.api.createOne('cyclists', cyclist);
	}

}
