import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`changes tracked inside the child component `)
    console.log(changes);
  }

}
