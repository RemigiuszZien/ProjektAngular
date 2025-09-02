
import { Routes } from '@angular/router';
import { Home } from './containers/home/home';
import { BuildsComponent } from './containers/builds/builds';
import { BuildDetailsComponent } from './containers/build-details/build-details';

export const routes: Routes = [
	{
		path: '',
		component: Home
	},
	{
		path: 'buildy',
		component: BuildsComponent
	},
	{
		path: 'build/:id',
		component: BuildDetailsComponent
	}
];
