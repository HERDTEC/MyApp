import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesRoutingModule } from './pages-routing.module';

const components = [
  DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
];
@NgModule({
  declarations: [ 
    components
  ],
  exports: [
    components
  ],
  imports:[
    SharedModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
