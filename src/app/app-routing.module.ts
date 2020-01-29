import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatpollformComponent } from './matpollform/matpollform.component';
import {ResponseComponent} from './response/response.component';
import {PollManagementComponent } from './poll-management/poll-management.component';
import { ModelComponent } from './model/model.component';
const routes: Routes = [
	{path: 'matpollform', component: MatpollformComponent},
	{ path: 'manage', component: PollManagementComponent },
	{ path: '',   component: ModelComponent},
	{path: '', redirectTo: '/',pathMatch: 'full'},
	{path: 'response', component: ResponseComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
