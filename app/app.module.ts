import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// in-memory web api to fake http server
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';
import {DashboardComponent} from './dashboard.component';
import {HeroSearchComponent} from './hero-search.component';
import {FormModelComponent} from './form-model.component';

import {routing} from './app.routing';

import './rxjs-extensions';


@NgModule
({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService), routing],
    declarations: [AppComponent, HeroDetailComponent, HeroesComponent, DashboardComponent, HeroSearchComponent, FormModelComponent],
    providers: [HeroService],
    bootstrap: [AppComponent]
})

export class AppModule {}
