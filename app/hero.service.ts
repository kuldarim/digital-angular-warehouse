import { Injectable } from '@angular/core';
import { heroes } from './mock-heroes';
import { IHeroInterface} from './Hero';

@Injectable()
export class HeroService
{
    getHeroes() : Promise<IHeroInterface[]> 
    {
        return Promise.resolve(heroes);
    }

    getHero(id: number): Promise<IHeroInterface>
    {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroesSlowly(): Promise<IHeroInterface[]>
    {
        return new Promise<IHeroInterface>(resolve => setTimeout(resolve, 1000)).then(() => this.getHeroes()); // simulates 1 s delay in getting data
    }
}