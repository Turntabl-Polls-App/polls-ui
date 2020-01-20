import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPollComponent } from './new-poll/new-poll.component';

const routes: Routes = [];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
