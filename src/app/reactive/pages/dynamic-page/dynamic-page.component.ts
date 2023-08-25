import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';

@Component({
  templateUrl: './dynamic-page.component.html',
  styles: [
  ]
})
export class DynamicPageComponent {

  form: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.minLength(3) ] ],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required]
    ])
  });

  newFavorite: FormControl = new FormControl( '', [ Validators.minLength(3), Validators.required ] );

  get favoriteGames() {
    return this.form.get("favoriteGames") as FormArray;
  }

  isValidField( field: string ): boolean| null {
    return this.validator.isValidField(this.form, field);
  }

  getFieldError( field:string ): string|null {
    if ( !this.form.controls[field]) return null;
    
    const errors = this.form.controls[field].errors || {};
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

  isValidFieldInArray( formArray: FormArray, index: number): boolean|null {
    return formArray.controls[index].errors 
    &&      formArray.controls[index].touched;
  }

  constructor(
    private fb: FormBuilder,
    private validator: ValidatorsService
  ) {}

  onDeleteFavorite( index: number ): void {
    this.favoriteGames.removeAt(index);
  }

  onAddFavorite( ): void {
    if ( this.newFavorite.invalid ) return;

    const game = this.newFavorite.value;
    this.favoriteGames.push(
      this.fb.control(game, Validators.required)
    );

    this.newFavorite.reset();
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched;
      return;
    }

    console.log(this.form.value);
    (this.form.controls['favoriteGames'] as FormArray) = this.fb.array([]);

    this.form.reset();
  }
}
