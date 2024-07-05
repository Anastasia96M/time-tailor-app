import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AddOnComponent } from './content/add-on/add-on.component';
import { FormsModule } from '@angular/forms';
import { SalonService } from './services/salon.service';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    AddOnComponent,
    ContactInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync(),
    SalonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
