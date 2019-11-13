import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormComponent } from './form/form.component';
import { Html5validationComponent } from './html5validation/html5validation.component';
import { CssclassesComponent } from './cssclasses/cssclasses.component';
import { NgmodelPropertiesComponent } from './ngmodel-properties/ngmodel-properties.component';
import { SubmitexampleComponent } from './submitexample/submitexample.component';


const routes: Routes = [
  {path: 'databinding', component: DatabindingComponent},
  {path: 'form', component: FormComponent},
  {path: 'html5validation', component: Html5validationComponent},
  {path: 'cssclasses', component: CssclassesComponent},
  {path: 'ngmodelproperties', component: NgmodelPropertiesComponent},
  {path: 'submitexample', component: SubmitexampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
