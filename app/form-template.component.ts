import {Component, OnInit} from '@angular/core';
import {FormInterface} from './form-interface';

@Component
({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'form-template.component.html',
})

export class FormTemplateComponent implements OnInit
{
    public user: FormInterface;

    ngOnInit()
    {
        this.user =
        {
            name: '',
            address:
            {
                street: '',
                number: '',
                post: ''
            },
            email: '',
            password: '',
            password2: '' //passwords must match
        };
    }

    public checkEmail(mail:string)
    {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(mail);
    }

    save(model: FormInterface, isValid: boolean)
    {
        console.log(model, isValid);
    }

}
