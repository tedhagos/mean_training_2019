import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { Html5validationComponent } from './html5validation/html5validation.component';
import { CssclassesComponent } from './cssclasses/cssclasses.component';
import { NgmodelPropertiesComponent } from './ngmodel-properties/ngmodel-properties.component';
import { SubmitexampleComponent } from './submitexample/submitexample.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DatabindingComponent,
    Html5validationComponent,
    CssclassesComponent,
    NgmodelPropertiesComponent,
    SubmitexampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
