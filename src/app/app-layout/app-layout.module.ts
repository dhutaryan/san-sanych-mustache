import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TuiAlertModule, TuiButtonModule, TuiRootModule } from '@taiga-ui/core';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [AppLayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    TuiRootModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    RouterModule,
  ],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
