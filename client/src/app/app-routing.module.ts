import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyclistsComponent } from './components/cyclists/cyclists.component';
import { TeamsComponent } from './components/teams/teams.component';
import { EditCyclistComponent } from './components/edit-cyclist/edit-cyclist.component';

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
		path: 'edit-cyclist',
		component: EditCyclistComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
