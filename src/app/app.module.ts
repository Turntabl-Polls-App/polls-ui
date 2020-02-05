import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import {MatCardModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, MatMenuModule, MatToolbarModule, MatSnackBarModule, MatDividerModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ModelComponent } from './model/model.component';
import { ResponseComponent } from './response/response.component';
import { ThankyoupageComponent } from './thankyoupage/thankyoupage.component';
import { CreatePollComponent } from './create-poll/create-poll.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ModelComponent,
    ResponseComponent,
    ThankyoupageComponent,
    CreatePollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDividerModule,
    BrowserAnimationsModule, 
    FormsModule  
  ],
  exports: [HeaderComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
