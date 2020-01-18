import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NewPollComponent } from './new-poll/new-poll.component';
import { ResponsesComponent } from './responses/responses.component';
import { UseranswerComponent } from './useranswer/useranswer.component';
import { SubmissionComponent } from './submission/submission.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { CreatorsComponent } from './creators/creators.component';
import { ReactiveFormsModule } from '@angular/forms'
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);



// Pass the fusioncharts library and chart module
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewPollComponent,
    ResponsesComponent,
    UseranswerComponent,
    SubmissionComponent,
    CreatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
