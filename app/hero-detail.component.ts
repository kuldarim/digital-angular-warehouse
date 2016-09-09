import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {IHeroInterface} from './hero';
import {HeroService} from './hero.service';

@Component
({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})



export class HeroDetailComponent implements OnInit
{
    public hero:IHeroInterface;

    constructor
    (
        private heroService: HeroService,
        private route: ActivatedRoute
    ){}

    ngOnInit():void
    {
        this.route.params.forEach((params: Params) =>
        {
            let id = +params['id']; // get id and convert it to string with +
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack():void
    {
        window.history.back();
    }

}