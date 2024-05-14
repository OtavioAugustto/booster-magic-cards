import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-dynamic-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dynamic-btn.component.html',
  styleUrl: './dynamic-btn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicBtnComponent {
  @Input() buttonText = 'Defalut';
  @Input() isDisable = false;
  @Input() buttonBgColor = signal('--blue');
}
