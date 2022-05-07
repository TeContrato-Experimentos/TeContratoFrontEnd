import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileContractorComponent} from "./Contractor/profile-contractor/profile-contractor.component";
import {ControlmenuComponent} from "./Owner/controlmenu/controlmenu.component";
import {SearchContractorComponent} from "./Owner/search-contractor/search-contractor.component";
import {ProjectinProgressComponent} from "./Owner/projectin-progress/projectin-progress.component";
import {ProjectsComponent} from "./projects/pages/projects/projects.component";
import {ControlMenuComponent} from "./projects/pages/control-menu/control-menu.component";
import {HomeComponent} from "./Owner/home/home.component";
import {FinalProject2Component} from "./Owner/final-project2/final-project2.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ConfigurationComponent} from "./Owner/configuration/configuration.component";
import {PaymentMethodsComponent} from "./payment-methods/payment-methods.component";
import {ProfileOwnerComponent} from "./Owner/profile-owner/profile-owner.component";
import {ProjectRecordOwnerComponent} from "./Owner/project-record-owner/project-record-owner.component";
import {OngoingProjectsOwnerComponent} from "./Owner/ongoing-projects-owner/ongoing-projects-owner.component";
import {PublishProjectOwnerComponent} from "./Owner/publish-project-owner/publish-project-owner.component";
import {ProjectHistoryContractorComponent} from "./Contractor/project-history-contractor/project-history-contractor.component";
import {ProjectProfileComponent} from "./Contractor/project-profile/project-profile.component";
import {SearchProjectComponent} from "./Contractor/search-project/search-project.component";
import {FirstStepRegistrationComponent} from "./first-step-registration/first-step-registration.component";
import {RegisterOwnerComponent} from "./Owner/register-owner/register-owner.component";
import {RegisterContractorComponent} from "./Contractor/register-contractor/register-contractor.component";
import {HomeContractorComponent} from "./Contractor/home-contractor/home-contractor.component";
import {ConfigurationContractorComponent} from "./Contractor/configuration-contractor/configuration-contractor.component";
import {PaymentMethodsContractorComponent} from "./Contractor/payment-methods-contractor/payment-methods-contractor.component";
import {ProfileEditOwnerComponent} from "./Owner/profile-edit-owner/profile-edit-owner.component";
import {ProfileEditContractorComponent} from "./Contractor/profile-edit-contractor/profile-edit-contractor.component";
import {ProjectProfileOwnerComponent} from "./Owner/project-profile-owner/project-profile-owner.component";
import {ContractorProfileVOwnerComponent} from "./Owner/contractor-profile-vowner/contractor-profile-vowner.component";
import {ControlMenuOwnerComponent} from "./Owner/control-menu-owner/control-menu-owner.component";
import {AvailableProjectComponent} from "./Owner/available-project/available-project.component";
import {BudgetListOwnerComponent} from "./budget-list-owner/budget-list-owner.component";
import {ProjectHistContVOwnerComponent} from "./Owner/project-hist-cont-vowner/project-hist-cont-vowner.component";
import {ProjectProContVOwnerComponent} from "./Owner/project-pro-cont-vowner/project-pro-cont-vowner.component";
import {ProjectProfileVContractorComponent} from "./Contractor/project-profile-vcontractor/project-profile-vcontractor.component";
import {OwnerProfileVContractorComponent} from "./Contractor/owner-profile-vcontractor/owner-profile-vcontractor.component";
import {ProjectHistOwnVContractorComponent} from "./Contractor/project-hist-own-vcontractor/project-hist-own-vcontractor.component";
import {ProjectProfilRecordOwnerComponent} from "./Owner/project-profil-record-owner/project-profil-record-owner.component";
import {ProjectProRecOwnerVContractorComponent} from "./Contractor/project-pro-rec-owner-vcontractor/project-pro-rec-owner-vcontractor.component";
import {NewBudgetComponent} from "./Contractor/new-budget/new-budget.component";




const routes: Routes = [
  { path:'', component: LoginComponent },
  { path:'owner/home', component: HomeComponent },
  {path: 'register', component: RegisterComponent},

  //Owner
  {path: 'owner/FinaleProject', component: FinalProject2Component},
  {path:'owner/searchContractor',component:SearchContractorComponent},
  {path:'owner/projectProgress',component:ProjectinProgressComponent},

  //Contractor
  {path:'contractor/profile',component:ProfileContractorComponent},
  {path:'contractor/controlMenu',component:ControlmenuComponent},
  {path:'contractor/Projects/ongoing', component: ProjectsComponent},
  {path:'contractor/Projects/ongoing/control-menu', component: ControlMenuComponent},



//Falta agregar al git

  {path: 'owner/configuration', component: ConfigurationComponent},
  {path: 'owner/paymentMethods', component: PaymentMethodsComponent},
  {path: 'firstStepRegistration', component: FirstStepRegistrationComponent},
  {path: 'owner/profile', component: ProfileOwnerComponent},
  {path: 'owner/projectRecordOwner', component: ProjectRecordOwnerComponent},
  {path: 'contractor/ongoingProjects', component: OngoingProjectsOwnerComponent},
  {path: 'owner/publishProject', component: PublishProjectOwnerComponent},
  {path: 'owner/registerOwner', component: RegisterOwnerComponent},
  {path: 'contractor/registerContractor', component:RegisterContractorComponent},
  {path: 'contractor/home', component:HomeContractorComponent},
  {path: 'contractor/configuration', component:ConfigurationContractorComponent},
  {path: 'contractor/paymentMethods', component:PaymentMethodsContractorComponent},
  {path: 'owner/profileEdit', component:ProfileEditOwnerComponent},
  {path: 'contractor/profileEdit', component:ProfileEditContractorComponent},
  {path: 'owner/projectProfile', component:ProjectProfileOwnerComponent},
  {path: 'owner/contractorProfile', component:ContractorProfileVOwnerComponent},
  {path: 'owner/controlMenu', component:ControlMenuOwnerComponent},
  {path: 'owner/availableProject', component: AvailableProjectComponent},
  {path: 'owner/budgetList', component: BudgetListOwnerComponent},
  {path: 'contractor/configuration', component: ConfigurationContractorComponent},
  {path: 'contractor/paymentMethods', component: PaymentMethodsContractorComponent},
  {path: 'owner/projectContractorHist', component: ProjectHistContVOwnerComponent },
  {path: 'owner/projectContProfile', component: ProjectProContVOwnerComponent},
  {path: 'contractor/ownerProjectProfile', component: ProjectProfileVContractorComponent},
  {path: 'contractor/ownerProfile', component: OwnerProfileVContractorComponent},
  {path: 'contractor/ownerProjectHistory', component: ProjectHistOwnVContractorComponent},
  {path: 'owner/projectProfileRecord', component: ProjectProfilRecordOwnerComponent},
  {path: 'contractor/profileProjectOwner', component: ProjectProRecOwnerVContractorComponent},
  {path: 'contractor/newBudget', component: NewBudgetComponent},




  {path: 'contractor/projectHistory-Contractor', component: ProjectHistoryContractorComponent},
  {path: 'contractor/projectProfile', component: ProjectProfileComponent},
  {path: 'contractor/searchProject', component:SearchProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
