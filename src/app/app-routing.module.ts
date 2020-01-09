import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPollComponent } from './new-poll/new-poll.component';
import { ResponsesComponent } from './responses/responses.component';
import { SubmissionComponent } from './submission/submission.component';
import { UseranswerComponent } from './useranswer/useranswer.component';



const routes: Routes = [
  {path: '', redirectTo: '/useranswer', pathMatch: 'full'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
