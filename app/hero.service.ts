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
}