import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyclistsComponent } from './components/cyclists/cyclists.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { EditCyclistComponent } from './components/edit-cyclist/edit-cyclist.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { EditProgramComponent } from './components/edit-program/edit-program.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'cyclists'
	},
	{
		path: 'cyclists',
		component: CyclistsComponent
	},
	{
		path: 'teams',
		component: TeamsComponent
	},
	{
		path: 'programs',
		component: ProgramsComponent
	},
	{
		path: 'edit-cyclist/:id',
		component: EditCyclistComponent
	},
	{
		path: 'add-cyclist',
		component: EditCyclistComponent
	},
	{
		path: 'edit-team/:id',
		component: EditTeamComponent
	},
	{
		path: 'add-team',
		component: EditTeamComponent
	},
	{
		path: 'edit-program/:id',
		component: EditProgramComponent
	},
	{
		path: 'add-program',
		component: EditProgramComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
