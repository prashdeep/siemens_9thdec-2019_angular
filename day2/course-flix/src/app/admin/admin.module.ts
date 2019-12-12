import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@NgModule({
  declarations: [CompOneComponent, CompTwoComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CompOneComponent,
    CompTwoComponent
  ]
})
export class AdminModule { }
