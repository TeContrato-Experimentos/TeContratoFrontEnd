import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogBudgetListComponent} from "./dialog-budget-list/dialog-budget-list.component";

@Component({
  selector: 'app-budget-list-owner',
  templateUrl: './budget-list-owner.component.html',
  styleUrls: ['./budget-list-owner.component.css']
})
export class BudgetListOwnerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(DialogBudgetListComponent, {
      width: '700px',
      height: '1500px',
    })
  }

  ngOnInit(): void {
  }

}
