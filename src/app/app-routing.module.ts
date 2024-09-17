import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';

const routes: Routes = [
  { path:"",component:ListeLivreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
