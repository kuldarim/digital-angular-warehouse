import {Component} from '@angular/core';
import {IHeroInterface} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';


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
    `,
    providers: [HeroService]
})

export class AppComponent implements OnInit
{
    public title:string = "Heroes of might and magic";
    public selectedHero:IHeroInterface;
    public heroes:IHeroInterface[];

    public onSelect(hero: IHeroInterface):void
    {
        this.selectedHero = hero;
    }

    constructor(private heroService: HeroService) // heroService injection
    {
        this.getHeroes();
    }

    ngOnInit():void
    {
        this.getHeroes();
    }

    private getHeroes():void
    {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes); // Im getiing mock heroes data from heroService by using Promises
    }

}