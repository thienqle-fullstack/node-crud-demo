import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { DataTablesModule } from 'angular-datatables';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';
import { LoginGaurdGuard } from './route-gaurd/login-gaurd.guard';
import { RolesGuard } from './route-gaurd/roles.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {MatMenuModule} from '@angular/material/menu';
import { EventscalenderComponent } from './events/eventscalender/eventscalender.component';
// import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConfirmationDialogComponent,
    routingComponents,
    InformationDialogComponent,
    PagenotfoundComponent,
    EventscalenderComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    DataTablesModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatGridListModule,
    MatMenuModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModalModule

  ],
  providers: [LoginGaurdGuard,RolesGuard],
  bootstrap: [AppComponent],
  exports:[ConfirmationDialogComponent,EventscalenderComponent],
  entryComponents: [ConfirmationDialogComponent,InformationDialogComponent]
})

export class AppModule { }
