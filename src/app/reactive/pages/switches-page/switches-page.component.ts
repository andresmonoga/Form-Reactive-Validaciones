import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent {

    public myForm: FormGroup = this.fb.group({
      gender:[ '', Validators.required ],
      wantNotifications:[ true, Validators.required ],
      termsAndConditions:[ false, Validators.requiredTrue ],
    })

    public person ={
      gender: 'F',
      wantNotifications: false,
    }

    constructor( private fb: FormBuilder,
      private validatorsService : ValidatorsService
     ){}

    ngOnInit(): void {
      //this.myForm.reset( rtx5090 )
    }

    isValidField( field:string ){
      return this.validatorsService.isValidFIeld( this.myForm, field );
    }

    onSave():void{
      if ( this.myForm.invalid ){
        this.myForm.markAllAsTouched();
        return;
      }

      const { termsAndConditions, ...newPerson } = this.myForm.value;

      this.person = newPerson;
      console.log(this.myForm.value);
      console.log(this.person);

      this.myForm.reset({  gender:'' ,wantNotifications:true, termsAndConditions:false });

    }


}
