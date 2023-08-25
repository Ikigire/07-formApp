import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  //  myForm: FormGroup = new FormGroup({
  //   name: new FormControl('', [], []),
  //   price: new FormControl(),
  //   inStorage: new FormControl()
  //  });

  product = {
    name: 'RTX 5090',
    price: 2500,
    storage: 6
  }

  isValidField( field: string ): boolean| null {
    return this.validator.isValidField(this.myForm, field);
  }

  getFieldError( field:string ): string|null {
    if ( !this.myForm.controls[field]) return null;
    
    const errors = this.myForm.controls[field].errors || {};
    let msg = '';

    for (const key of Object.keys(errors) ){
      switch( key ) {
        case 'required':
          msg = "Este campo es requerido.";
          break;
        case 'minlength':
          msg = `Mínimo ${ errors['minlength'].requiredLength  } caractéres.`;
          break;
      }
    }
    return msg;
  }
  
  public myForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    price: [ 0, [ Validators.required, Validators.min(0) ] ],
    storage: [ 0, [ Validators.required, Validators.min(0) ] ]
  });

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorsService
  ) { }
  
  ngOnInit(): void {
    // this.myForm.reset(this.product);
  }

  onSave():void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched;
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset({
      price: 0, storage: 0
    });
  }


}
