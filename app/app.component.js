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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Heroes of might and magic";
        this.heroes = [
            { id: 10, name: "dr. Faust" },
            { id: 11, name: "Crag Hack" },
            { id: 12, name: "Victoria" },
            { id: 13, name: "Gerg" },
            { id: 14, name: "Ky kyske" },
            { id: 15, name: "Sandro" }
        ];
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h2 class=\"display-center margin-bottom-20\">{{title}}</h2>\n    <div *ngIf=\"selectedHero\">\n    <p>Hero name: <b>{{selectedHero.name}}</b></p>\n    <p>Hero id: <b>{{selectedHero.id}}</b></p>\n    <div class=\"margin-bottom-50\">\n        <h3><label class=\"label label-primary\">Change hero name:\n            <input type=\"text\" class=\"form-control col-xs-12 col-sm-6 col-md-4\" [(ngModel)]=\"selectedHero.name\" placeholder=\"Enter a name for hero\" />\n        </label></h3>\n    </div>\n    </div>\n    <h2>All heroes:</h2>\n    <ul class=\"heroes\">\n        <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n             <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n        </li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map