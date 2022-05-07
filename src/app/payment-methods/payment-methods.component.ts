import { Component, OnInit } from '@angular/core';
import {DialogPaymentComponent} from "./dialog-payment/dialog-payment.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.css']
})
export class PaymentMethodsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(DialogPaymentComponent, {
      width: '700px',
      height: '1500px',
    });
  }

  ngOnInit(): void {
  }

}
