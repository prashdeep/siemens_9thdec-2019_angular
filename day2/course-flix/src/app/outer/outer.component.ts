import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer',
  templateUrl: './outer.component.html',
  styleUrls: ['./outer.component.css']
})
export class OuterComponent implements OnInit {

  coursename;
  constructor() { }

  ngOnInit() {
  }

}
