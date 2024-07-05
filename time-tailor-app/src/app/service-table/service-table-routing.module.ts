import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceTableComponent } from './service-table.component';

const routes: Routes = [
  { path: '', component: ServiceTableComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTableRoutingModule { }
