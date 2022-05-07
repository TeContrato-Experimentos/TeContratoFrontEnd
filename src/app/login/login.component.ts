import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ContractorService} from "../services/contractor.service"
import {OwnerService} from "../services/owner.service";
import {TokenStorageService} from "../services/token-storage.service";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {LoginService} from "../services/login.service";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailexist!:string
  passwordexist!:string
  postulanteOempleador=false
  validador=false
  ingresante!:number;
  fecha = new Date();
  contractor: {}
  owner: {}



  constructor(private TokenStorageService: TokenStorageService, private authService: AuthService, private contractorApi: ContractorService, private  ownerApi: OwnerService, private router: Router, private usersApi:LoginService) {
    this.contractor ={}
    this.owner ={}
  }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  getAllUsers(): void {
    this.usersApi.getAllUsers().subscribe((response: any) => {

      console.log('..',response.content)

      for(var i=0;i<response.content.length;i++){
        if(response.content[i].email==this.emailexist &&
          response.content[i].password==this.passwordexist

        ){
          this.validador=true;
          this.ingresante= response.content[i].id;
        }

      }
      console.log(this.ingresante);

      if(this.validador){
        console.clear();
        this.contractorApi.getById(this.ingresante).subscribe((responseContractor: any ) => {
          console.clear();
          this.contractor=responseContractor

          this.authService.login(responseContractor).subscribe(
            data => {
              console.log('confirm',data);

            },
            error => {
              console.clear();
              console.log('error',error.error.errorMessage);

            }
          );
          console.clear();
          this.router.navigate([`contractor/${this.ingresante}`])
            .then(() => console.clear());

        });

        this.ownerApi.getById(this.ingresante).subscribe((responseOwner: any) => {
          console.clear();
          this.owner=responseOwner

          this.authService.login(responseOwner).subscribe(
            data => {

              console.log('confirm',data);

            },
            error => {
              console.log('error',error.error.errorMessage);
              console.clear();
            }
          );
          this.router.navigate([`owner/${this.ingresante}`])
            .then(() => console.clear());
        })

        console.clear();
      }
      else {
        alert("Contraseña incorrecta intentelo nuevamente")
      }
      console.clear();
    });
  }


  matcher = new MyErrorStateMatcher();



}
