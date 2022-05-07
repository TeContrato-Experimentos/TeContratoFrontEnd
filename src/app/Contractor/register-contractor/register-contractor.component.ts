import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contractor} from "../../model/contractor";
import {User} from "../../model/user";
import {ContractorService} from "../../services/contractor.service";

@Component({
  selector: 'app-register-contractor',
  templateUrl: './register-contractor.component.html',
  styleUrls: ['./register-contractor.component.css']
})
export class RegisterContractorComponent implements OnInit {

  contractorForm!: NgForm;
  contractorData: Contractor = {} as Contractor;
  userData: User = {} as User;
  constructor(private contractorApiService: ContractorService) { }

  ngOnInit(): void {
  }

  AddContractor(): void{
    const newContractor = {
      user : this.userData.Nuser,
      firstname: this.userData.Nname,
      lastname: this.userData.Nlastname,
      dni: this.userData.Cdni,
      email: this.userData.Temail,
      password: this.userData.Cpassword,
      bio: this.contractorData.TBio,
      education: this.contractorData.NEducation,
      number: this.contractorData.Numphone
    };
    this.contractorApiService.create(newContractor).subscribe((response:any) =>{
      console.log(response)
    })
  }

}
