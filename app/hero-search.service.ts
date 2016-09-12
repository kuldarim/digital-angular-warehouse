import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';

import {IHeroInterface} from './hero';


@Injectable()
export class HeroSearchService
{
    constructor(private http: Http) {}
    
    search(term: string): Observable<IHeroInterface[]>
    {
        return this.http.get('app/heroes/?name=${term}')
        .map((r: Response) => r.json().data as IHeroInterface[]);
    }
}