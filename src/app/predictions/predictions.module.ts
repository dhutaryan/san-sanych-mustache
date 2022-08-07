import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TuiButtonModule } from '@taiga-ui/core';
import { TuiBadgedContentModule, TuiIslandModule } from '@taiga-ui/kit';

import { PredictionsRoutingModule } from './predictions-routing.module';
import { PredictionsComponent } from './containers/predictions/predictions.component';
import { PredictionItemComponent } from './components/prediction-item/prediction-item.component';
import { PastPredictionItemComponent } from './components/past-prediction-item/past-prediction-item.component';
import { CreatePredictionComponent } from './containers/create-prediction/create-prediction.component';
import { BackButtonComponent } from '../shared/components/back-button/back-button.component';

@NgModule({
  declarations: [
    PredictionsComponent,
    PredictionItemComponent,
    PastPredictionItemComponent,
    CreatePredictionComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TuiIslandModule,
    TuiBadgedContentModule,
    TuiButtonModule,
    BackButtonComponent,
    PredictionsRoutingModule,
  ],
})
export class PredictionsModule {}
