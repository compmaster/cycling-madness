import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CyclistsComponent } from './components/cyclists/cyclists.component';
import { TeamsComponent } from './components/teams/teams.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		CyclistsComponent,
		TeamsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		DataTableModule,
		SharedModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
