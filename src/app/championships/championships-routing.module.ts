import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChampionshipsComponent } from './containers/championships/championships.component';

const routes: Routes = [
  {
    path: '',
    component: ChampionshipsComponent,
    title: 'Чемпионаты',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChampionshipsRoutingModule {}
