import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IHeroInterface} from './Hero';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService
{
    private headers = new Headers({'Content-Type': 'application/json'});
    private heroesUrl = 'app/heroes'; // our web api

    constructor(private http: Http){}

    private handleError(error: any) : Promise<any>
    {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    public getHero(id: number): Promise<IHeroInterface>
    {
        return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
    }

    public getHeroes() : Promise<IHeroInterface[]> 
    {
        return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as IHeroInterface[]).catch(this.handleError);
    }

    public getHeroesSlowly(): Promise<IHeroInterface[]>
    {
        return new Promise<IHeroInterface>(resolve => setTimeout(resolve, 1000)).then(() => this.getHeroes()); // simulates 1 s delay in getting data
    }

    public create(name: string): Promise<IHeroInterface>
    {
        return this.http
            .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    public update(hero: IHeroInterface): Promise<IHeroInterface> 
    {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }


}