import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FansComponent } from './fans/fans.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'fans', component: FansComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
