import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) {}

  ngOnInit(): void {}
}
