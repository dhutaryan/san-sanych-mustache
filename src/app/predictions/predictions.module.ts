import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TuiIslandModule } from '@taiga-ui/kit';

import { PredictionsRoutingModule } from './predictions-routing.module';
import { PredictionsComponent } from './containers/predictions/predictions.component';
import { PredictionItemComponent } from './components/prediction-item/prediction-item.component';

@NgModule({
  declarations: [PredictionsComponent, PredictionItemComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TuiIslandModule,
    PredictionsRoutingModule,
  ],
})
export class PredictionsModule {}
