import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PredictionsComponent } from './containers/predictions/predictions.component';

const routes: Routes = [
  {
    path: '',
    component: PredictionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictionsRoutingModule {}
