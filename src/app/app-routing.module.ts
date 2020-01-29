import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatpollformComponent } from './matpollform/matpollform.component';
import {ResponseComponent} from './response/response.component';
const routes: Routes = [
	{path: 'matpollform', component: MatpollformComponent},
	{path: '', redirectTo: 'matpollform',pathMatch: 'full'},
	{path: 'response', component: ResponseComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
