import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ssm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  @Input() isOpen = false;
}
