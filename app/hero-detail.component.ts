import {Component, Input} from '@angular/core';
import {IHeroInterface} from './hero';

@Component
({
    selector: 'hero-detail',
    template:
    `
    <div *ngIf="hero">
        <p>Hero name: <b>{{hero.name}}</b></p>
        <p>Hero id: <b>{{hero.id}}</b></p>
        <div class="margin-bottom-50">
            <h3><label class="label label-primary">Change hero name:
                <input type="text" class="form-control col-xs-12 col-sm-6 col-md-4" [(ngModel)]="hero.name" placeholder="Enter a name for hero" />
            </label></h3>
        </div>
    </div>
    `
})



export class HeroDetailComponent
{
    @Input()
    public hero:IHeroInterface;
}