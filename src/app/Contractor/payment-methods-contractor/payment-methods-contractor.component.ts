import { Component, OnInit } from '@angular/core';
import {DialogPaymentComponent} from "../../payment-methods/dialog-payment/dialog-payment.component";
import {MatDialog} from "@angular/material/dialog";
import {DialogPaymentContractorComponent} from "./dialog-payment-contractor/dialog-payment-contractor.component";

@Component({
  selector: 'app-payment-methods-contractor',
  templateUrl: './payment-methods-contractor.component.html',
  styleUrls: ['./payment-methods-contractor.component.css']
})
export class PaymentMethodsContractorComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogPaymentContractorComponent, {
      width: '700px',
      height: '1500px',
    });
  }
  ngOnInit(): void {
  }

}
