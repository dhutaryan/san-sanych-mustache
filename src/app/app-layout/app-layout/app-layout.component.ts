import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ssm-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent {
  public isSidebarOpen = false;

  public get titleText(): string {
    return this.title.getTitle().replace(/\s-\W+/gi, '');
  }

  constructor(private title: Title) {}

  public onToggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }
}
