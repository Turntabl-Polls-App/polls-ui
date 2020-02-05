import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResponseComponent } from './response/response.component';
import { ModelComponent } from './model/model.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component'
import { CreatePollComponent } from './create-poll/create-poll.component';

const routes: Routes = [
	{ path: 'create-poll', component: CreatePollComponent },
	{ path: '', component: ModelComponent},
	{ path: '', redirectTo: '/',pathMatch: 'full' },
	{ path: 'response', component: ResponseComponent },
	{ path: 'thankyoupage', component: ThankyoupageComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
