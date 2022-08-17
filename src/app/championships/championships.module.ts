import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TuiIslandModule } from '@taiga-ui/kit';

import { ChampionshipsRoutingModule } from './championships-routing.module';
import { ChampionshipsComponent } from './containers/championships/championships.component';

@NgModule({
  declarations: [ChampionshipsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TuiIslandModule,
    ChampionshipsRoutingModule,
  ],
})
export class ChampionshipsModule {}
