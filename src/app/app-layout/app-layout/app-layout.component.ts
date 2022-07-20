import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssm-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {
  public isSidebarOpen = false;

  public onToggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }
}
