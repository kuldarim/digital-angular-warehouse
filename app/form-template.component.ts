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
            password: '',
            password2: '' //passwords must match
        };
    }

    save(model: FormInterface, isValid: boolean)
    {
        console.log(model, isValid);
    }

}
