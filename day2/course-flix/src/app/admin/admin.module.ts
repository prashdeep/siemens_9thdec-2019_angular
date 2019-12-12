import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompOneComponent, CompTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:CompOneComponent
      },
      {
        path:'comp2',
        component:CompTwoComponent
      }
    ])
  ],
  exports:[
    CompOneComponent,
    CompTwoComponent
  ]
})
export class AdminModule { }
