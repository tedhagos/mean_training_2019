import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BooklistComponent } from './booklist/booklist.component';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule, MatCard} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { NumtostarsPipe } from './numtostars.pipe';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    NumtostarsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // NoopAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
