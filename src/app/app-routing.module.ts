import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatpollformComponent } from './matpollform/matpollform.component';
import {ResponseComponent} from './response/response.component';
import {PollManagementComponent } from './poll-management/poll-management.component';
import { ModelComponent } from './model/model.component';
import {ThankyoupageComponent} from './thankyoupage/thankyoupage.component'

const routes: Routes = [
	{path: 'matpollform', component: MatpollformComponent},
	{ path: 'manage', component: PollManagementComponent },
	{ path: '',   component: ModelComponent},
	// { path: 'polls/manage/:id', component: PollManagementComponent },
	{path: '', redirectTo: '/',pathMatch: 'full'},
	{path: 'response', component: ResponseComponent},
	{path: 'thankyoupage', component: ThankyoupageComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
