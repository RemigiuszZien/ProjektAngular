import { Routes } from '@angular/router';
import { Home } from './containers/home/home';
import { BuildsComponent } from './containers/builds/builds';
import { BuildDetailsComponent } from './containers/build-details/build-details';
import { LoginComponent } from './containers/login/login';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
	{
		path: '',
		component: Home,
		canActivate: [authGuard]
	},
	{
		path: 'buildy',
		component: BuildsComponent,
		canActivate: [authGuard]
	},
	{
		path: 'build/:id',
		component: BuildDetailsComponent,
		canActivate: [authGuard]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '**',
		redirectTo: '/login'
	}
];
