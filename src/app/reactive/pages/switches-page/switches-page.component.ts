import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    gender: ['M', [Validators.required]],
    wantNotifications: [true, [] ],
    termsAndConditions: [false,  [ Validators.requiredTrue ] ]
  });

  initInfo = {gender: 'M', wantNotifications: true};

  person = {
    gender: 'M',
    wantNotifications: true
  };

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.myForm.reset(this.initInfo);
  }

  isValidField( field: string ): boolean| null {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  onSubmit(): void {
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    const {termsAndConditions, ...newPerson} = this.myForm.value;

    this.person = newPerson;
    
    console.log(this.myForm.value);
    console.log(this.person);
    
    this.myForm.reset(this.initInfo)
  }
}
