import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookmasterComponent } from './bookmaster/bookmaster.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { HttpClientModule} from '@angular/common/http';
import { AddbookComponent } from './addbook/addbook.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookmasterComponent,
    BookdetailComponent,
    AddbookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
