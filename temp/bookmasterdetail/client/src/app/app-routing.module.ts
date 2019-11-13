import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookmasterComponent } from './bookmaster/bookmaster.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { AddbookComponent } from './addbook/addbook.component';


const routes: Routes = [
  {path: 'master', component: BookmasterComponent},
  {path: 'detail/:id', component: BookdetailComponent},
  {path: 'addbook', component: AddbookComponent},
  {path: '', redirectTo: 'master', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
