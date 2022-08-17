import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ChampionshipsService } from '../../championships.service';

@Component({
  selector: 'ssm-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChampionshipsComponent implements OnInit {
  public readonly championships$ = this.championshipsService.getAll();

  constructor(private readonly championshipsService: ChampionshipsService) {}

  ngOnInit(): void {}
}
