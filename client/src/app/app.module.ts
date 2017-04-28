import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule, SharedModule, SplitButtonModule, ConfirmDialogModule, GrowlModule, SelectButtonModule } from 'primeng/primeng';

import { AlertService } from './services/alert.service';
import { CyclistService } from './services/cyclist.service';
import { TeamService } from './services/team.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CyclistsComponent } from './components/cyclists/cyclists.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EditCyclistComponent } from './components/edit-cyclist/edit-cyclist.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EtudesComponent } from './components/etudes/etudes.component';
import { ProgramsComponent } from './components/programs/programs.component';

@NgModule({
	declarations: [
		AppComponent,
		MenuComponent,
		CyclistsComponent,
		TeamsComponent,
		EditCyclistComponent,
		AlertsComponent,
		EditTeamComponent,
		EtudesComponent,
		ProgramsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		DataTableModule,
		SharedModule,
		SplitButtonModule,
		ConfirmDialogModule,
		BrowserAnimationsModule,
		GrowlModule,
		SelectButtonModule
	],
	providers: [AlertService, CyclistService, TeamService],
	bootstrap: [AppComponent]
})
export class AppModule { }
