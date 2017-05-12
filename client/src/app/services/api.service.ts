import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Entity } from '../interfaces/entity';
import { API_ENDPOINT } from '../app.config';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService<T extends Entity> {

	constructor(protected http: Http) { }

	getAll(url: string): Observable<T[]> {
		return this.http.get(API_ENDPOINT + url).map(response => response.json());
	}

	getOne(url: string, id: number): Observable<T> {
		return this.http.get(API_ENDPOINT + url + '/' + id).map(response => response.json());
	}

	//TODO: Respone -> some other object
	deleteOne(url: string, entity: T): Observable<Response> {
		return this.http.delete(API_ENDPOINT + url + '/' + entity.id);
	}

	//TODO: Response -> some other object
	updateOne(url: string, data: T): Observable<Response> {
		return this.http.put(API_ENDPOINT + url + '/' + data.id, data);
	}

	//TODO: Response -> some other object
	createOne(url: string, entity: T): Observable<Response> {
		return this.http.post(API_ENDPOINT + url, entity);
	}

}
