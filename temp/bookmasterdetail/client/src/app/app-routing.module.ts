import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmasterComponent } from './bookmaster/bookmaster.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';


const routes: Routes = [
  {path: 'master', component: BookmasterComponent},
  {path: 'detail/:id', component: BookdetailComponent},
  {path: '', redirectTo: 'master', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
