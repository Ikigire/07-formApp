import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from 'src/app/shared/service/validators.service';
import { EmailValidator } from 'src/app/shared/validators/email-validator.service';
// import * as customValidator from 'src/app/shared/validators/validator';

@Component({
  templateUrl: './register-page.component.html',
  styles: [
  ]
})
export class RegisterPageComponent {

  regForm: FormGroup = this.fb.group({
    name: [ '', [ Validators.required, Validators.pattern(this.validatorService.firstNameAndLastnamePattern) ] ],
    // email: [ '', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [ new EmailValidator() ] ],
    email: [ '', [ Validators.required, Validators.pattern(this.validatorService.emailPattern) ], [ this.ev.validate ] ],
    username: [ '', [ Validators.required, this.validatorService.cantBeStrider ] ],
    password: [ '',  [ Validators.required, Validators.minLength(6) ] ],
    confirmPass: [ '', [ Validators.required ] ]
  }, {
    validators: [
      this.validatorService.idFieldOneEqualsToFieldTwo('password', 'confirmPass'),
    ]
  }
  );

  isValidField( field: string ): boolean | null {
    return this.validatorService.isValidField(this.regForm, field)
  }

  constructor(
    private fb: FormBuilder,
    private validatorService: ValidatorsService,
    private ev: EmailValidator
  ) {}

  onSubmit(): void {
    this.regForm.markAllAsTouched();
  }
}
