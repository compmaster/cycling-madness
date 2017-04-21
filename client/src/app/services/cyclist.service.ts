import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Cyclist } from '../entities/cyclist';
import { API_ENDPOINT } from '../app.config';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CyclistService {

	constructor(private http: Http) { }

	getCyclists(): Observable<Cyclist[]> {
		return this.http.get(API_ENDPOINT + 'cyclists').map(response => response.json());
	}

	getCyclist(id: number): Observable<Cyclist> {
		return this.http.get(API_ENDPOINT + 'cyclists/' + id).map(response => response.json());
	}

	remove(cyclist: Cyclist): Observable<Response> {
		return this.http.delete(API_ENDPOINT + 'cyclists/' + cyclist.id);
	}

	update(cyclist: Cyclist): Observable<Response> {
		return this.http.put(API_ENDPOINT + 'cyclists/' + cyclist.id, cyclist);
	}
	
	create(cyclist: Cyclist): Observable<Response> {
		return this.http.post(API_ENDPOINT + 'cyclists', cyclist);
	}

}
