import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/predictions',
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'predictions',
        loadChildren: () =>
          import('./predictions/predictions.module').then(
            (m) => m.PredictionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
