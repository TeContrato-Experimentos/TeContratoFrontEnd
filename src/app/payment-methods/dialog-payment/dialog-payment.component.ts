import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {PaymentMethod} from "../../model/Payment-method";
import {PaymentMethodOwnerService} from "../../services/payment-method-owner.service";

@Component({
  selector: 'app-dialog-payment',
  templateUrl: './dialog-payment.component.html',
  styleUrls: ['./dialog-payment.component.css']
})
export class DialogPaymentComponent implements OnInit {

  paymentMethod!: NgForm;
  paymentMethodData: PaymentMethod = {} as PaymentMethod;

  constructor(private paymentMethodApiService: PaymentMethodOwnerService) { }

  ngOnInit(): void {
  }


}
