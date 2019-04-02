import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import { LcOverviewComponent } from './lc-overview/lc-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { LcOverviewComponent } from './lc-overview/lc-overview.component';


@NgModule({
  declarations: [
    AppComponent,
    LcOverviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
