import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssm-prediction-item',
  templateUrl: './prediction-item.component.html',
  styleUrls: ['./prediction-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PredictionItemComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
