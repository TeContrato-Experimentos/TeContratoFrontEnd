import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Owner} from "../../model/owner";
import {User} from "../../model/user";
import {OwnerService} from "../../services/owner.service";

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})
export class RegisterOwnerComponent implements OnInit {

  ownerForm!: NgForm;
  ownerData: Owner = {} as Owner;
  userData: User = {} as User;
  constructor(private ownerApiService: OwnerService) { }

  ngOnInit(): void {
  }

  AddOwner(): void{
    const newOwner = {
      user : this.userData.Nuser,
      firstname: this.userData.Nname,
      lastname: this.userData.Nlastname,
      dni: this.userData.Cdni,
      email: this.userData.Temail,
      password: this.userData.Cpassword,
      bio: this.ownerData.TBio,
      address: this.ownerData.TAddress,
      city: this.ownerData.CCity
    };
    this.ownerApiService.create(newOwner).subscribe((response:any)=>{
      console.log(response)
    })
  }

}
