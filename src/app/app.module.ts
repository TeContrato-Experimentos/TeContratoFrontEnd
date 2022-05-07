import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/pages/projects/projects.component';
import { ControlMenuComponent } from './projects/pages/control-menu/control-menu.component';
import { DialogComponent } from './projects/pages/dialog/dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTooltipModule} from "@angular/material/tooltip";
import {HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {AppRoutingModule} from "./app-routing.module";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './Owner/home/home.component';
import { FinalProject2Component } from './Owner/final-project2/final-project2.component';
import {SearchContractorComponent} from './Owner/search-contractor/search-contractor.component'
import {ProjectinProgressComponent} from "./Owner/projectin-progress/projectin-progress.component";
import {RegisterComponent} from "./register/register.component";
import {ProfileContractorComponent} from "./Contractor/profile-contractor/profile-contractor.component";
import {LoginComponent} from "./login/login.component";
import {ControlmenuComponent} from "./Owner/controlmenu/controlmenu.component";
import {MatRadioModule} from "@angular/material/radio";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { ConfigurationComponent } from './Owner/configuration/configuration.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { DialogPaymentComponent } from './payment-methods/dialog-payment/dialog-payment.component';
import { ProfileOwnerComponent } from './Owner/profile-owner/profile-owner.component';
import { ProjectRecordOwnerComponent } from './Owner/project-record-owner/project-record-owner.component';
import { OngoingProjectsOwnerComponent } from './Owner/ongoing-projects-owner/ongoing-projects-owner.component';
import { PublishProjectOwnerComponent } from './Owner/publish-project-owner/publish-project-owner.component';
import { ProjectHistoryContractorComponent } from './Contractor/project-history-contractor/project-history-contractor.component';
import { ProjectProfileComponent } from './Contractor/project-profile/project-profile.component';
import { SearchProjectComponent } from './Contractor/search-project/search-project.component';
import { MainNavOwnerComponent } from './Owner/main-nav-owner/main-nav-owner.component';
import {MatListModule} from "@angular/material/list";
import { MainNavContractorComponent } from './Contractor/main-nav-contractor/main-nav-contractor.component';
import { FirstStepRegistrationComponent } from './first-step-registration/first-step-registration.component';
import { RegisterOwnerComponent } from './Owner/register-owner/register-owner.component';
import { RegisterContractorComponent } from './Contractor/register-contractor/register-contractor.component';
import { HomeContractorComponent } from './Contractor/home-contractor/home-contractor.component';
import { ConfigurationContractorComponent } from './Contractor/configuration-contractor/configuration-contractor.component';
import { PaymentMethodsContractorComponent } from './Contractor/payment-methods-contractor/payment-methods-contractor.component';
import { DialogPaymentContractorComponent } from './Contractor/payment-methods-contractor/dialog-payment-contractor/dialog-payment-contractor.component';
import { ProfileEditOwnerComponent } from './Owner/profile-edit-owner/profile-edit-owner.component';
import { ProfileEditContractorComponent } from './Contractor/profile-edit-contractor/profile-edit-contractor.component';
import { ProjectProfileOwnerComponent } from './Owner/project-profile-owner/project-profile-owner.component';
import { ContractorProfileVOwnerComponent } from './Owner/contractor-profile-vowner/contractor-profile-vowner.component';
import { ControlMenuOwnerComponent } from './Owner/control-menu-owner/control-menu-owner.component';
import { AvailableProjectComponent } from './Owner/available-project/available-project.component';
import { BudgetListOwnerComponent } from './budget-list-owner/budget-list-owner.component';
import { DialogBudgetListComponent } from './budget-list-owner/dialog-budget-list/dialog-budget-list.component';
import { ProjectHistContVOwnerComponent } from './Owner/project-hist-cont-vowner/project-hist-cont-vowner.component';
import { ProjectProContVOwnerComponent } from './Owner/project-pro-cont-vowner/project-pro-cont-vowner.component';
import { ProjectProfileVContractorComponent } from './Contractor/project-profile-vcontractor/project-profile-vcontractor.component';
import { OwnerProfileVContractorComponent } from './Contractor/owner-profile-vcontractor/owner-profile-vcontractor.component';
import { ProjectHistOwnVContractorComponent } from './Contractor/project-hist-own-vcontractor/project-hist-own-vcontractor.component';
import { ProjectProfilRecordOwnerComponent } from './Owner/project-profil-record-owner/project-profil-record-owner.component';
import { ProjectProRecOwnerVContractorComponent } from './Contractor/project-pro-rec-owner-vcontractor/project-pro-rec-owner-vcontractor.component';
import { BudgetComponent } from './budget/budget.component';
import { NewBudgetComponent } from './Contractor/new-budget/new-budget.component';
import {MatDatepickerModule} from "@angular/material/datepicker";







@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    ControlMenuComponent,
    DialogComponent,
    HomeComponent,
    FinalProject2Component,
    SearchContractorComponent,
    ProjectinProgressComponent,
    RegisterComponent,
    ProfileContractorComponent,
    LoginComponent,
    ControlmenuComponent,
    ConfigurationComponent,
    PaymentMethodsComponent,
    DialogPaymentComponent,
    ProfileOwnerComponent,
    ProjectRecordOwnerComponent,
    OngoingProjectsOwnerComponent,
    PublishProjectOwnerComponent,
    ProjectHistoryContractorComponent,
    ProjectProfileComponent,
    SearchProjectComponent,
    MainNavOwnerComponent,
    MainNavContractorComponent,
    FirstStepRegistrationComponent,
    RegisterOwnerComponent,
    RegisterContractorComponent,
    HomeContractorComponent,
    ConfigurationContractorComponent,
    PaymentMethodsContractorComponent,
    DialogPaymentContractorComponent,
    ProfileEditOwnerComponent,
    ProfileEditContractorComponent,
    ProjectProfileOwnerComponent,
    ContractorProfileVOwnerComponent,
    ControlMenuOwnerComponent,
    AvailableProjectComponent,
    BudgetListOwnerComponent,
    DialogBudgetListComponent,
    ProjectHistContVOwnerComponent,
    ProjectProContVOwnerComponent,
    ProjectProfileVContractorComponent,
    OwnerProfileVContractorComponent,
    ProjectHistOwnVContractorComponent,
    ProjectProfilRecordOwnerComponent,
    ProjectProRecOwnerVContractorComponent,
    BudgetComponent,
    NewBudgetComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatTooltipModule,
        MatSidenavModule,
        MatProgressBarModule,
        MatDialogModule,
        MatRadioModule,
        MatOptionModule,
        MatSelectModule,
        FlexLayoutModule,
        MatDatepickerModule,
        MatNativeDateModule,


        MatProgressSpinnerModule,
        MatSlideToggleModule,
        MatListModule,
        ReactiveFormsModule
    ],
  entryComponents:[DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
