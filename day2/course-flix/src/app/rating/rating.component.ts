import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input("value") ratings;
  stars: any[];
  isFractionPresent: boolean;

  constructor() { }

  ngOnInit() {
    const wholeNumber = Math.floor(this.ratings);
    this.stars = new Array(wholeNumber);
    this.isFractionPresent = this.ratings - wholeNumber !== 0;
    
  }

}
