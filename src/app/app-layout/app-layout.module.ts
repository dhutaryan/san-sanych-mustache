import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TuiAlertModule, TuiRootModule } from '@taiga-ui/core';

import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [CommonModule, TuiRootModule, TuiAlertModule, RouterModule],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
