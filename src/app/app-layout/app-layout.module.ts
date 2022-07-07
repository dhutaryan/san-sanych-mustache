import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TuiAlertModule, TuiButtonModule, TuiRootModule } from '@taiga-ui/core';

import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TuiRootModule,
    TuiAlertModule,
    TuiButtonModule,
    RouterModule,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
