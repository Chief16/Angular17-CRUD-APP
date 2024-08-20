import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path:"", component: HomeComponent, pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"table", component: TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
