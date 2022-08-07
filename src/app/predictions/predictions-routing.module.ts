import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PredictionsComponent } from './containers/predictions/predictions.component';
import { CreatePredictionComponent } from './containers/create-prediction/create-prediction.component';

const routes: Routes = [
  {
    path: '',
    component: PredictionsComponent,
    title: 'Прогнозы',
  },
  {
    path: 'create',
    component: CreatePredictionComponent,
    title: 'Прогнозы',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PredictionsRoutingModule {}
