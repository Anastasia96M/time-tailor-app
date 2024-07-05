import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const routes: Routes = [
  { path: 'contact-info', component: ContactInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
