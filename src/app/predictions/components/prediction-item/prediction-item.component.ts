import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

import { Prediction } from '../../models';

@Component({
  selector: 'ssm-prediction-item',
  templateUrl: './prediction-item.component.html',
  styleUrls: ['./prediction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PredictionItemComponent implements OnInit {
  @Input() prediction: Prediction;

  constructor() {}

  ngOnInit(): void {}
}
