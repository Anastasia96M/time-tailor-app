import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactInfoRoutingModule } from './contact-info-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ContactInfoComponent } from './contact-info.component';


@NgModule({
  declarations: [
    ContactInfoComponent,
  ],
  imports: [
    CommonModule,
    ContactInfoRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class ContactInfoModule { }
