import {Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component
({
    selector: 'model-based-form',
    templateUrl: 'app/form-model.component.html',
})
export class FormModelComponent implements OnInit
{

    public createUserForm: FormGroup; // all input fields can be accesses through this var
    public submitted = false;
    public formInit = false; // this bool will be set to true after the form was initialized

    constructor(private formBuilder: FormBuilder) {} // I'm using form builder for simplifying form initialization

    public onSubmit(isValid: boolean):void
    {
        if(isValid) console.log("Form valid");
        this.submitted = true;
    }

    ngOnInit():void
    {
        this.buildForm();
    }

    public buildForm():void
    {
        this.createUserForm = this.formBuilder.group // form initialization
        ({
            name: ['', [Validators.required, Validators.minLength(5)]],
            address: this.formBuilder.group({
                street: ['', Validators.required],
                number: ['', [Validators.pattern("^[0-9]*$"), Validators.required]],
                post: ['', Validators.required]
            }),
            password: ['', [Validators.required, Validators.minLength(5)]],
            password2: ['', [this.validatePassword.bind(this)]]
        })

        this.formInit = true; 
    }

    public validatePassword(control: FormControl) // custom validator, to check if passwords match
    {

        if(this.formInit)
        {
            if(this.createUserForm.controls['password'].value == this.createUserForm.controls['password2'].value)
            {
                return null;
            }
            else
            {
                return "Error, passwords are not the same";
            }
        }

    }


}