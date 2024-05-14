import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './components/shared/card/card.component';
import { DynamicBtnComponent } from './components/shared/dynamic-btn/dynamic-btn.component';
import { TitleComponent } from './components/shared/title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, DynamicBtnComponent, TitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'rural-front-v2';
  bg = signal('--grey');
  bgButton = signal('--green');
  bgButtonDois = signal('--blue');
  textBtn = 'Buscar';
  isDisable = true;
  inputText = 'BUSCAR CARDS DE MAGIC';
  colectionCards = ['AMONKHET', 'IXALAN', 'ZENDIKAR', 'RAVINCA', 'ONSIUAUGHT'];
}
