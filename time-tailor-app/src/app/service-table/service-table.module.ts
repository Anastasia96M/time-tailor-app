import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceTableRoutingModule } from './service-table-routing.module';
import { AddOnDialogComponent } from './add-on-dialog/add-on-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AddOnDialogComponent
  ],
  imports: [
    CommonModule,
    ServiceTableRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ServiceTableModule { }
