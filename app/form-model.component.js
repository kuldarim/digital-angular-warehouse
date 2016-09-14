"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require('@angular/forms');
var FormModelComponent = (function () {
    function FormModelComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.formErrors = {
            "name": "",
            "address": "",
            "street": "",
            "number": "",
            "post": "",
            "password": "",
            "password2": ""
        };
        this.validationMessages = {
            "name": { "required": "This field is required!", "minlength": "Name must contain at least 5 characters!" },
            "address": {},
            "street": { "required": "This field is required!" },
            "number": { "required": "This field must be numeric!" },
            "post": { "required": "This field is required!" },
            "password": { "required": "This field is required!" },
            "password2": { "required": "This field is required!" }
        };
    }
    FormModelComponent.prototype.validatePassword = function (passwd) {
    };
    FormModelComponent.prototype.ngSubmit = function () {
        this.submitted = true;
    };
    FormModelComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    FormModelComponent.prototype.buildForm = function () {
        var _this = this;
        this.createUserForm = this.formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            address: this.formBuilder.group({
                street: ['', forms_1.Validators.required],
                number: ['', forms_1.Validators.required],
                post: ['', forms_1.Validators.required]
            }),
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            password2: ['', this.validatePassword]
        });
        this.createUserForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    FormModelComponent.prototype.onValueChanged = function (data) {
        if (data === void 0) { data = null; }
        if (!this.createUserForm) {
            return;
        }
        var form = this.createUserForm;
        // console.log(form);
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            var control = form.get(field);
            console.log(control);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + " ";
                }
            }
        }
    };
    FormModelComponent = __decorate([
        core_1.Component({
            selector: 'model-based-form',
            templateUrl: 'app/form-model.component.html',
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], FormModelComponent);
    return FormModelComponent;
}());
exports.FormModelComponent = FormModelComponent;
//# sourceMappingURL=form-model.component.js.map