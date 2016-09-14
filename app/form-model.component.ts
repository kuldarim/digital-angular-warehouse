import {Component, OnInit } from "@angular/core";
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';


@Component
({
    selector: 'model-based-form',
    templateUrl: 'app/form-model.component.html',
})
export class FormModelComponent implements OnInit
{

    public createUserForm: FormGroup;
    public submitted = false;
    public formInit = false;
    constructor(private formBuilder: FormBuilder) {}

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
        this.createUserForm = this.formBuilder.group
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

    public onEvent(event):void
    {
        event.stopPropagation();
    }

    public validatePassword(control: FormControl)
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