import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
  },
];

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LazyModule {}
