import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleStrategy } from '@angular/router';

import { PageTitleStrategy } from './title-strategy/page-title-strategy';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },
  ],
})
export class CoreModule {}
