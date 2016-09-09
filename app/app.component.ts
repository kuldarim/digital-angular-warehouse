import {Component, OnInit } from "@angular/core";

@Component 
({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent implements OnInit
{
    public title:string = "Heroes of might and magic";
    
    ngOnInit():void
    {

    }
}