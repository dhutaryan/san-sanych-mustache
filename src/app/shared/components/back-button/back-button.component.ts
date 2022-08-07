import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Location } from '@angular/common';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  imports: [TuiButtonModule],
  selector: 'ssm-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackButtonComponent {
  constructor(private location: Location) {}

  public onBack(): void {
    this.location.back();
  }
}
