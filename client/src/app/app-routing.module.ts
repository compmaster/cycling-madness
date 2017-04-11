import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyclistsComponent } from './components/cyclists/cyclists.component';
import { TeamsComponent } from './components/teams/teams.component';

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
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
