import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtisteComponent } from './artiste/artiste.component';
import { FansComponent } from './fans/fans.component';
import { ArtisteGuard } from './guards/artiste.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'fans', component: FansComponent },
  { path: 'artiste/:id', component: ArtisteComponent, canActivate: [ArtisteGuard] },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64],
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
