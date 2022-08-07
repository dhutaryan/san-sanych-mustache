import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssm-create-prediction',
  templateUrl: './create-prediction.component.html',
  styleUrls: ['./create-prediction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatePredictionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
