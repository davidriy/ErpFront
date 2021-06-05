import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataViewerComponent } from './components/data-viewer/component/data-viewer.component';
import {HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './components/main-page/main-page.component';
import {ButtonModule} from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TableModule} from 'primeng/table';
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import { LoginComponent } from './components/login/component/login.component';
import { EmployeeComponent } from './components/table/employee/employee.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {ChartModule} from 'primeng/chart';
import { LocationComponent } from './components/location/location.component';
import { ContactComponent } from './components/contact/contact.component';
import { SuggestionComponent } from './components/suggestion/suggestion.component';
import {GMapModule} from 'primeng/gmap';
import { AdriacardonaComponent } from './components/adriacardona/adriacardona.component';

@NgModule({
  declarations: [
    AppComponent,
    DataViewerComponent,
    MainPageComponent,
    LoginComponent,
    EmployeeComponent,
    DashboardComponent,
    LocationComponent,
    ContactComponent,
    SuggestionComponent,
    AdriacardonaComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ButtonModule,
        PaginatorModule,
        BrowserAnimationsModule,
        TableModule,
        InputTextModule,
        MessageModule,
        MessagesModule,
        ToastModule,
        ReactiveFormsModule,
        FormsModule,
        ChartModule,
      GMapModule


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
