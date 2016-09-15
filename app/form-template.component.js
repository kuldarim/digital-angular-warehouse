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
var core_1 = require('@angular/core');
var FormTemplateComponent = (function () {
    function FormTemplateComponent() {
    }
    FormTemplateComponent.prototype.ngOnInit = function () {
        this.user =
            {
                name: '',
                address: {
                    street: '',
                    number: '',
                    post: ''
                },
                email: '',
                password: '',
                password2: '' //passwords must match
            };
    };
    FormTemplateComponent.prototype.checkEmail = function (mail) {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(mail);
    };
    FormTemplateComponent.prototype.save = function (model, isValid) {
        console.log(model, isValid);
    };
    FormTemplateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'form-template.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], FormTemplateComponent);
    return FormTemplateComponent;
}());
exports.FormTemplateComponent = FormTemplateComponent;
//# sourceMappingURL=form-template.component.js.map