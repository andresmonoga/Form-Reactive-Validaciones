import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as customValidators  from '../../../shared/validators/validators';

import { ValidatorsService } from '../../../shared/service/validators.service';
import { EmailValidator } from '../../../shared/validators/email-validator.service';


@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern( this.validatorsService.firstNameAndLastnamePattern ) ]],
    email: ['', [ Validators.required, Validators.pattern( this.validatorsService.emailPattern )] , [ new EmailValidator() ] ],
    username: ['', [ Validators.required, this.validatorsService.cantBeStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required, Validators.minLength(6) ]],
  },{
    validator: this.validatorsService.isFieldOneEqualFieldTwo( 'password' ,'password2' ),
  });


  constructor(
     private fb: FormBuilder,
     private validatorsService : ValidatorsService,
     ){}

  isValidField( field:string ){
    return this.validatorsService.isValidFIeld( this.myForm, field );
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }

}