import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PredictionsService } from '../../predictions.service';

@Component({
  selector: 'ssm-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PredictionsComponent implements OnInit {
  public readonly upcomingPredictions$ = this.predictionsService.upcoming();
  public readonly pastPredictions$ = this.predictionsService.past();

  constructor(private predictionsService: PredictionsService) {}

  ngOnInit(): void {}
}
