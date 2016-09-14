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

    constructor(private formBuilder: FormBuilder) {}

    public validatePassword(passwd: FormControl)
    {

    }

    public ngSubmit():void
    {
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
            address: this.formBuilder.group
            ({
                street: ['', Validators.required],
                number: ['', Validators.required],
                post: ['', Validators.required]
            }),
            password: ['', [Validators.required, Validators.minLength(5)]],
            password2: ['', this.validatePassword]
        })

        this.createUserForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged();
    }

    public formErrors =
    {
        "name": "",
        "address": "",
        "street": "",
        "number": "",
        "post": "",
        "password": "",
        "password2": ""
    }

    public validationMessages =
    {
        "name": {"required": "This field is required!", "minlength": "Name must contain at least 5 characters!"},
        "address": {},
        "street": {"required": "This field is required!"},
        "number": {"required": "This field must be numeric!"},
        "post": {"required": "This field is required!"},
        "password": {"required": "This field is required!"},
        "password2": {"required": "This field is required!"}
    }

    public onValueChanged(data: any = null)
    {
        if(!this.createUserForm)
        {
            return;
        }

        const form = this.createUserForm;
        // console.log(form);

        for(const field in this.formErrors)
        {
            this.formErrors[field] = "";
            const control = form.get(field);
            console.log(control);

            if(control && control.dirty && !control.valid)
            {
                const messages = this.validationMessages[field];
                for(const key in control.errors)
                {
                    this.formErrors[field] += messages[key] + " ";
                }
            }
        }
    }


}