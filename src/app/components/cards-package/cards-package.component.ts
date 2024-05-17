import { CardComponent } from './../shared/card/card.component';
import { Router } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../shared/title/title.component';
import { BtnScrollTopComponent } from '../shared/btn-scroll-top/btn-scroll-top.component';
@Component({
  selector: 'app-cards-package',
  standalone: true,
  imports: [CardComponent, TitleComponent, BtnScrollTopComponent],
  templateUrl: './cards-package.component.html',
  styleUrl: './cards-package.component.scss',
})
export class CardsPackageComponent implements OnInit {
  listBoosters: any[] = [];
  principalTitle = 'Essas são as cartas do pacote aberto =)';
  bgCard = signal('--on-bg-home');
  colorImg = '';
  imgDefault = '../../../assets/img/no-img.png';
  constructor(private router: Router) {
    this.listBoosters = this.router.getCurrentNavigation()?.extras.state as any;
    this.listBoosters = Object.keys(this.listBoosters).map(
      (key: any) => this.listBoosters[key]
    );
  }
  ngOnInit(): void {}
}
