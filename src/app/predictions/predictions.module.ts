import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TuiBadgedContentModule, TuiIslandModule } from '@taiga-ui/kit';

import { PredictionsRoutingModule } from './predictions-routing.module';
import { PredictionsComponent } from './containers/predictions/predictions.component';
import { PredictionItemComponent } from './components/prediction-item/prediction-item.component';
import { PastPredictionItemComponent } from './components/past-prediction-item/past-prediction-item.component';

@NgModule({
  declarations: [
    PredictionsComponent,
    PredictionItemComponent,
    PastPredictionItemComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TuiIslandModule,
    TuiBadgedContentModule,
    PredictionsRoutingModule,
  ],
})
export class PredictionsModule {}
