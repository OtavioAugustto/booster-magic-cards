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
import { SetsModel } from '../../core/models/BoostersModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    DynamicBtnComponent,
    TitleComponent,
    FormsModule,
    ReactiveFormsModule,
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
  showListSets = false;
  searchFormGroup: FormGroup;

  constructor(
    private magicCardsService: MagicCardsService,
    private _formBuilder: FormBuilder
  ) {
    this.searchFormGroup = this._formBuilder.group({
      name: [''],
      block: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  getBoosters(name: string, block: string) {
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
    this.magicCardsService.getBoostersById(id).subscribe((res) => {
      console.log('BOOSTERS', res);
    });
  }
}
