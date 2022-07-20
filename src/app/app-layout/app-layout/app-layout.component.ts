import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ssm-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppLayoutComponent implements OnInit {
  public isSidebarOpen = false;
  public titleText: string;

  constructor(private title: Title) {}

  ngOnInit() {
    this.titleText = this.title.getTitle().replace(/\s-\W+/gi, '');
  }

  public onToggleSidebar(isOpen: boolean): void {
    this.isSidebarOpen = isOpen;
  }
}
