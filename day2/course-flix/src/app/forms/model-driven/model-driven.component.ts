import { Component } from '@angular/core';
import { FormGroup, FormControl, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent {

  courseForm = new FormGroup({
    coursename: new FormControl('',  [
      Validators.required, 
      Validators.minLength(4),
      Validators.maxLength(8)
    ]),

    price: new FormControl('',[
      Validators.required,
      Validators.min(10000), 
      Validators.max(20000)
    ])
  });

  get coursename (){
    return this.courseForm.get('coursename');
  }

  get price (){
    return this.courseForm.get('price');
  }

  handleSubmit(){

  }

}
