import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllTemplatesComponent } from './all-templates/all-templates.component';
import { CreateTemplatesComponent } from './create-templates/create-templates.component';


const routes: Routes = [
  {path:'alltemp',component:AllTemplatesComponent},
  {path:'ctemp',component:CreateTemplatesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
