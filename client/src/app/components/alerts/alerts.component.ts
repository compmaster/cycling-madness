import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from 'primeng/primeng';
import { Subscription } from 'rxjs/Subscription';
import { AlertService } from 'app/services/alert.service';

@Component({
	selector: 'cm-alerts',
	templateUrl: './alerts.component.html',
	styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit, OnDestroy {

	private subscription: Subscription = new Subscription();
	private messages: Message[] = [];

	constructor(private alertService: AlertService) { }

	ngOnInit() {
		this.subscription = this.alertService.messages.subscribe(
			(message: Message) => setTimeout(() => this.messages.push(message))
		);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
