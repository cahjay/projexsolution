import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import {BioComponent} from './bio/bio.component';
import {ServiceComponent} from './service/service.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent},
   { path: 'bio', component: BioComponent},
   { path: 'service', component: ServiceComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        { enableTracing: true })], // <-- debugging purposes only)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
HomeComponent,
  BioComponent,
  ServiceComponent
];

