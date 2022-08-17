import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssm-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChampionshipsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
