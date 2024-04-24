import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionComponent } from './components/instruction/instruction.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'instruction', component: InstructionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
