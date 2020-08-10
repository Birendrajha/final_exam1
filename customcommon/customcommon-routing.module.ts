import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MainNavComponent } from './main-nav/main-nav.component';


const routes: Routes = [
 
  {path:'search',component:SearchComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomcommonRoutingModule { }
