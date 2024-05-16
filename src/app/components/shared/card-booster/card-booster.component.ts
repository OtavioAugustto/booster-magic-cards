import { Component, Input, OnInit, signal } from '@angular/core';
import { CardComponent } from '../card/card.component';
import {
  BoostersItemsModel,
  BoostersModel,
} from '../../../core/models/BoostersModel';

@Component({
  selector: 'app-card-booster',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-booster.component.html',
  styleUrl: './card-booster.component.scss',
})
export class CardBoosterComponent implements OnInit {
  @Input() listBoosters: any[] = [];
  bgCard = signal('--on-bg-home');

  ngOnInit(): void {
    console.log(this.listBoosters);
  }
}
