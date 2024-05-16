import { Component, OnInit, signal } from '@angular/core';
import { CardComponent } from '../shared/card/card.component';
import { DynamicBtnComponent } from '../shared/dynamic-btn/dynamic-btn.component';
import { TitleComponent } from '../shared/title/title.component';
import { MagicCardsService } from '../../core/services/magic-cards.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DynamicBtnComponent,
    TitleComponent,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  textBtn = 'Buscar';
  bgCard = signal('--on-bg-home');
  bgSecondaryCard = signal('--bg-home');
  colorBtn = signal('--secondary-color');
  isDisable = true;
  principalTitle = 'BUSCAR CARDS DE MAGIC';
  resultTitle = 'BOOSTERS DA COLEÇÃO';
  colectionNames = [
    { value: 'AMONKHET' },
    { value: 'IXALAN' },
    { value: 'ZENDIKAR' },
    { value: 'RAVINCA' },
    { value: 'ONSIUAUGHT' },
  ];
  listSets: any[] = [];
  listBoosters: any[] = [];
  showListSets = false;
  searchFormGroup: FormGroup;

  constructor(
    private magicCardsService: MagicCardsService,
    private _formBuilder: FormBuilder,
    private router: Router
  ) {
    this.searchFormGroup = this._formBuilder.group({
      name: [''],
      block: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getSets(name: string, block: string) {
    if (this.searchFormGroup.controls['block'].valid) {
      const concatName = name + '|' + block;
      alert(concatName);
      this.magicCardsService.getSetsByName(concatName).subscribe((res: any) => {
        console.log(res);
        var resp = Object.keys(res).map((key) => res[key]);
        this.listSets = resp;
        this.showListSets = true;
        console.log('LISTA AQUI', this.listSets);
      });
    } else {
      alert('Preencha os campos obrigatórios!');
    }
  }
  getBoostersById(id: string) {
    this.magicCardsService.getBoostersById(id).subscribe((res: any) => {
      console.log('BOOSTERS', res);
      var resp = Object.keys(res).map((key) => res[key]);
      this.listBoosters = resp;
      this.router.navigate(['cards'], { state: this.listBoosters });
    });
  }
}
