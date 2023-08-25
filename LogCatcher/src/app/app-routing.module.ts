import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogReportComponent } from './log-report/log-report.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path:'',
    component:LandingPageComponent
  },
  {
    path: 'logs/:id',
    component: LogReportComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy',
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
