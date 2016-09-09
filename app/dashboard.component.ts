import {Component, OnInit} from '@angular/core';
import {IHeroInterface} from './hero';
import {HeroService} from './hero.service';
import {Router} from '@angular/router';

@Component
({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit
{
    public heroes: IHeroInterface[] = [];

    constructor(private heroService: HeroService, private router: Router){}

    ngOnInit():void
    {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0, 5)); // take top 5 heroes
    }

    gotoDetail(hero: IHeroInterface):void
    {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}