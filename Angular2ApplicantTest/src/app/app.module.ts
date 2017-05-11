// angular imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';


// app-specific imports
import {AppComponent} from './app.component';
import {ExampleModule} from './example-component/example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ExampleModule,
    RouterModule.forRoot([])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
