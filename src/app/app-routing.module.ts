import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LcOverviewComponent } from './lc-overview/lc-overview.component';

const routes: Routes = [
  { path: 'leetcode', component: LcOverviewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
