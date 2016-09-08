import {Component} from '@angular/core';
import {IHeroInterface} from './hero';


@Component
({
    selector: 'my-app',
    template: `
    <h2 class="display-center margin-bottom-20">{{title}}</h2>
    <hero-detail [hero]="selectedHero"></hero-detail>
    <h2>All heroes:</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes" [class.selected]="hero == selectedHero" (click)="onSelect(hero)">
             <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    `
})

export class AppComponent 
{
    public title:string = "Heroes of might and magic";
    public selectedHero:IHeroInterface;

    public heroes:IHeroInterface[] = 
    [
        {id: 10, name: "dr. Faust"},
        {id: 11, name: "Crag Hack"},
        {id: 12, name: "Victoria"},
        {id: 13, name: "Gerg"},
        {id: 14, name: "Ky kyske"},
        {id: 15, name: "Sandro"}
    ];

    public onSelect(hero: IHeroInterface):void
    {
        this.selectedHero = hero;
        console.log("click");
    }

}