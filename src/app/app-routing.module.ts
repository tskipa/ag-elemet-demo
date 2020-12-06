import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'lazy',
        loadChildren: () =>
          import('./lazy/lazy.module').then((m) => m.LazyModule),
        // loadChildren: './lazy/lazy.module#LazyModule',
      },
      { path: 'home', component: HomeComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
