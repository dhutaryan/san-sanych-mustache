import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionshipsRoutingModule } from './championships-routing.module';
import { ChampionshipsComponent } from './containers/championships/championships.component';


@NgModule({
  declarations: [
    ChampionshipsComponent
  ],
  imports: [
    CommonModule,
    ChampionshipsRoutingModule
  ]
})
export class ChampionshipsModule { }
