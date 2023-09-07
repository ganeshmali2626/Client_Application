import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsockitserviceServiceprivate } from './websockitservice.service';
import { Canva1Component } from './canva1/canva1.component';
import { Canva2Component } from './canva2/canva2.component';

@NgModule({
  declarations: [
    AppComponent,
    Canva1Component,
    Canva2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WebsockitserviceServiceprivate],
  bootstrap: [AppComponent]
})
export class AppModule { }
