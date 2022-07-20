import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssm-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PredictionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
