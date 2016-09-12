import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {IHeroInterface} from './hero';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';


@Component
({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit
{
    public title:string = "Heroes of might and magic";
    public selectedHero:IHeroInterface;
    public heroes:IHeroInterface[];

    constructor(private heroService: HeroService, private router: Router) // heroService injection
    {
        this.getHeroes();
    }

    public onSelect(hero: IHeroInterface):void
    {
        this.selectedHero = hero;
    }

    gotoDetail(hero: IHeroInterface):void
    {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

    ngOnInit():void
    {
        this.getHeroes();
    }

    private getHeroes():void
    {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes); // Im getiing mock heroes data from heroService by using Promises
    }

    public add(name: string):void
    {
        name = name.trim();
        if(!name) { return; }
        this.heroService.create(name).then(hero => {this.heroes.push(hero); this.selectedHero = null});
    }

}