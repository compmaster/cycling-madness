import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { CyclistService } from '../services/cyclist.service';
import { Cyclist } from '../entities/cyclist';

@Injectable()
export class CyclistResolverService implements Resolve<Cyclist> {

	constructor(private cyclistService: CyclistService) { }

	resolve(route: ActivatedRouteSnapshot): Observable<Cyclist> {
		let id = route.params['id'];
		return this.cyclistService.getCyclist(id);
	}

}