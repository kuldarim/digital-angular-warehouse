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

    getHeroesSlowly(): Promise<IHeroInterface[]>
    {
        return new Promise<IHeroInterface>(resolve => setTimeout(resolve, 1000)).then(() => this.getHeroes());
    }
}