import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MatpollformComponent } from './matpollform/matpollform.component';
import {ResponseComponent} from './response/response.component';
import { ModelComponent } from './model/model.component';
import {ThankyoupageComponent} from './thankyoupage/thankyoupage.component'

const routes: Routes = [
	{path: 'matpollform', component: MatpollformComponent},
	{ path: '',   component: ModelComponent},
	{path: '', redirectTo: '/',pathMatch: 'full'},
	{path: 'response', component: ResponseComponent},
	{path: 'thankyoupage', component: ThankyoupageComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
