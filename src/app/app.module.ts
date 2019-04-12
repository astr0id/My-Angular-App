import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import { LcOverviewComponent } from './lc-overview/lc-overview.component';
import { AppRoutingModule } from './app-routing.module';
import { LcOverviewComponent } from './lc-overview/lc-overview.component';
import { LcDetailComponent } from './lc-detail/lc-detail.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    LcOverviewComponent,
    LcDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
