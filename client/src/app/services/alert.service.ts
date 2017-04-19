import { Injectable } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class AlertService {

	public messages: Subject<Message> = new Subject();
	
	public success(message: string, summary?: string) {
		this.messages.next({
			severity: 'success',
			summary: summary,
			detail: message
		});
	}
	
	public error(message: string, summary?: string) {
		this.messages.next({
			severity: 'error',
			summary: summary,
			detail: message
		});
	}
	
	public info(message: string, summary?: string) {
		this.messages.next({
			severity: 'info',
			summary: summary,
			detail: message
		});
	}
	
	public warn(message: string, summary?: string) {
		this.messages.next({
			severity: 'warn',
			summary: summary,
			detail: message
		});
	}

}
