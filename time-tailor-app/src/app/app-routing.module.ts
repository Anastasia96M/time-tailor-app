import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service-table', loadChildren: () => import('./service-table/service-table.module').then(m => m.ServiceTableModule) },
  { path: 'contact-info', loadChildren: () => import('./contact-info/contact-info.module').then(m => m.ContactInfoModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
