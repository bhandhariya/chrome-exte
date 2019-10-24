import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { Temp1Component } from './templates/temp1/temp1.component';
import { Temp2Component } from './templates/temp2/temp2.component';
import { Temp3Component } from './templates/temp3/temp3.component';
import { Temp4Component } from './templates/temp4/temp4.component';

@NgModule({
  declarations: [
    AppComponent,
    Temp1Component,
    Temp2Component,
    Temp3Component,
    Temp4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,MatDialogModule
  ],
  entryComponents:[Temp1Component,Temp2Component,
    Temp3Component,
    Temp4Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
