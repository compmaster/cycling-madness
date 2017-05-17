import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule, SharedModule, SplitButtonModule, ConfirmDialogModule, GrowlModule, SelectButtonModule, ConfirmationService } from 'primeng/primeng';

import { AlertService } from './services/alert.service';
import { CyclistService } from './services/cyclist.service';
import { ProgramService } from './services/program.service';
import { TeamService } from './services/team.service';
import { ApiService } from './services/api.service';
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
import { EditProgramComponent } from './components/edit-program/edit-program.component';
import { CyclistResolverService } from './resolvers/cyclist-resolver.service';
import { TeamResolverService } from './resolvers/team-resolver.service';
import { ProgramResolverService } from './resolvers/program-resolver.service';
import { ProgramComponent } from './components/program/program.component';

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
		ProgramsComponent,
		EditProgramComponent,
		ProgramComponent
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
	providers: [
		ApiService,
		AlertService,
		ConfirmationService,
		CyclistService,
		CyclistResolverService,
		ProgramService,
		ProgramResolverService,
		TeamService,
		TeamResolverService],
	bootstrap: [AppComponent]
})
export class AppModule { }
