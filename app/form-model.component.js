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
        this.formInit = false;
    }
    FormModelComponent.prototype.onSubmit = function (isValid) {
        if (isValid)
            console.log("Form valid");
        this.submitted = true;
    };
    FormModelComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    FormModelComponent.prototype.buildForm = function () {
        this.createUserForm = this.formBuilder.group({
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            address: this.formBuilder.group({
                street: ['', forms_1.Validators.required],
                number: ['', [forms_1.Validators.pattern("^[0-9]*$"), forms_1.Validators.required]],
                post: ['', forms_1.Validators.required]
            }),
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            password2: ['', [this.validatePassword.bind(this)]]
        });
        this.formInit = true;
    };
    FormModelComponent.prototype.onEvent = function (event) {
        event.stopPropagation();
    };
    FormModelComponent.prototype.validatePassword = function (control) {
        if (this.formInit) {
            if (this.createUserForm.controls['password'].value == this.createUserForm.controls['password2'].value) {
                return null;
            }
            else {
                return "Error, passwords are not the same";
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