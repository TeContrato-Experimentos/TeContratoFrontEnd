import { Component, OnInit } from '@angular/core';
export interface Image {
  cols: number;
  rows: number;
}
export interface Content {
  cols: number;
  rows: number;
}
export interface Content1 {
  cols: number;
  rows: number;
}
export interface Content2 {
  cols: number;
  rows: number;
}
@Component({
  selector: 'app-contractor-profile-vowner',
  templateUrl: './contractor-profile-vowner.component.html',
  styleUrls: ['./contractor-profile-vowner.component.css']
})
export class ContractorProfileVOwnerComponent implements OnInit {
  tiles: Image[] = [
    {cols: 1, rows: 3},
  ];
  contents: Content[]=[
    {cols: 3, rows: 1},
  ];
  contents1: Content1[]=[
    {cols: 3, rows: 1},
  ];
  contents2: Content2[]=[
    {cols: 3, rows: 1},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
