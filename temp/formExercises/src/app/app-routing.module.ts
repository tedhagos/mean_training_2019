import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicformComponent } from './basicform/basicform.component';
import { FormupdateComponent } from './formupdate/formupdate.component';

const routes: Routes = [
  {path: 'basicform', component: BasicformComponent},
  {path: 'formupdate', component: FormupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
