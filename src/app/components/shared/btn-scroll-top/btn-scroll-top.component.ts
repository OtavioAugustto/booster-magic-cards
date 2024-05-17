import { Component, signal } from '@angular/core';
import { DynamicBtnComponent } from '../dynamic-btn/dynamic-btn.component';

@Component({
  selector: 'app-btn-scroll-top',
  standalone: true,
  imports: [DynamicBtnComponent],
  templateUrl: './btn-scroll-top.component.html',
  styleUrl: './btn-scroll-top.component.scss',
})
export class BtnScrollTopComponent {
  textBtn = 'Voltar ao topo';
  bgCard = signal('--on-bg-home');
  bgSecondaryCard = signal('--bg-home');
  colorBtn = signal('--secondary-color');
  imgBtn = '../../../assets/img/arrow-up.svg';

  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
