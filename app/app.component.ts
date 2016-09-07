import {Component} from '@angular/core';

export interface IHeroInterface
{
    id: number;
    name: string;
}

@Component
({
    selector: 'my-app',
    template: `
    <h2 class="display-center margin-bottom-20">{{title}}</h2>
    <div *ngIf="selectedHero">
    <p>Hero name: <b>{{selectedHero.name}}</b></p>
    <p>Hero id: <b>{{selectedHero.id}}</b></p>
    <div class="margin-bottom-50">
        <h3><label class="label label-primary">Change hero name:
            <input type="text" class="form-control col-xs-12 col-sm-6 col-md-4" [(ngModel)]="selectedHero.name" placeholder="Enter a name for hero" />
        </label></h3>
    </div>
    </div>
    <h2>All heroes:</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)">
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
    }

}