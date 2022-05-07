import { Component, OnInit } from '@angular/core';

export interface Image {
  cols: number;
  rows: number;
}
export interface Content {
  cols: number;
  rows: number;
}


@Component({
  selector: 'app-project-hist-cont-vowner',
  templateUrl: './project-hist-cont-vowner.component.html',
  styleUrls: ['./project-hist-cont-vowner.component.css']
})
export class ProjectHistContVOwnerComponent implements OnInit {

  selected = '';
  selected1 = '';
  selected2 = '';
  selected3 = '';
  selected4 = '';
  tiles: Image[] = [
    {cols: 1, rows: 3},
  ];
  contents: Content[]=[
    {cols: 3, rows: 1},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
