import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyclistsComponent } from './components/cyclists/cyclists.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EditCyclistComponent } from './components/edit-cyclist/edit-cyclist.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';

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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
