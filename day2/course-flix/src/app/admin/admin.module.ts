import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompOneComponent } from './comp-one/comp-one.component';



@NgModule({
  declarations: [CompOneComponent],
  imports: [
    CommonModule
  ],
  exports:[
    CompOneComponent
  ]
})
export class AdminModule { }
