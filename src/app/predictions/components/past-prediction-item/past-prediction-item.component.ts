import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Prediction } from '../../models';

@Component({
  selector: 'ssm-past-prediction-item',
  templateUrl: './past-prediction-item.component.html',
  styleUrls: ['./past-prediction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PastPredictionItemComponent implements OnInit {
  @Input() prediction: Prediction;

  constructor() {}

  ngOnInit(): void {}
}
