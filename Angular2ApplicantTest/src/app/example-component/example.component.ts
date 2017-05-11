import { Component, OnInit } from '@angular/core';

import {ISinger} from './example.interfaces';

@Component({
    selector: 'app-example',
    templateUrl: 'example.component.html'
})
export class ExampleComponent implements OnInit {
    singers: Array<ISinger>;
    tableStyle: any;
    constructor() { }

    ngOnInit() {
        this.tableStyle = `border: 2px solid black;`;
        this.singers = [];
        const bruce: ISinger = {
            name: 'Bruce Dickinson',
            email: 'bruce.dickinson@example.com',
            band: 'Iron Maiden'
        };

        const james: ISinger = {
            name: 'James Hetfield',
            email: 'james.hetfield@example.com',
            band: 'Metallica'
        };

        const geoff: ISinger = {
            name: 'Geoff Tate',
            email: 'geoff.tate@example.com',
            band: 'Queensryche'
        };
        this.singers.push(bruce, james, geoff);
     }

     addSinger(): void {
         // TODO -- Add a singer here
     }

     removeSinger(event: any, singer: ISinger): void {
         // TODO -- Remove a singer here.
     }
}
