import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import {HeroSearchService} from './hero-search.service';
import {IHeroInterface} from './hero';

@Component
({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.component.css'],
    providers: [HeroSearchService]
})

export class HeroSearchComponent implements OnInit
{
    heroes: Observable<IHeroInterface[]>;
    private searchTerms = new Subject<string>();

    constructor(private heroSearchService: HeroSearchService, private router: Router){}

    //pushing a search term into observable stream
    public search(term: string):void
    {
        this.searchTerms.next(term);
        console.log(this.heroes);
    }

    public ngOnInit(): void 
    {
        this.heroes = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            // return the http search observable
            ? this.heroSearchService.search(term)
            // or the observable of empty heroes if no search term
            : Observable.of<IHeroInterface[]>([]))
        .catch(error => {
            // TODO: real error handling
            console.log(error);
            return Observable.of<IHeroInterface[]>([]);
        });
    }

    public gotoDetail(hero: IHeroInterface):void
    {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }


}