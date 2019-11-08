import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberToStarsPipe } from './number-to-stars.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberToStarsPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
