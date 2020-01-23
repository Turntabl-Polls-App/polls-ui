import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPollComponent } from './new-poll/new-poll.component';
import { SubmissionComponent } from './submission/submission.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import { CreatorsComponent } from './creators/creators.component';
import { ReactiveFormsModule } from '@angular/forms'
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);


import {MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatToolbarModule} from '@angular/material';
import { MatpollformComponent } from './matpollform/matpollform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from './model/model.component';



// Pass the fusioncharts library and chart module
@NgModule({
  declarations: [
    AppComponent,
    NewPollComponent,
    SubmissionComponent,
    CreatorsComponent,
    MatpollformComponent,
    FooterComponent,
    HeaderComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FusionChartsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    BrowserAnimationsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
