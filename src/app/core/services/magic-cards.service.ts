import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BoostersModel, SetsModel } from '../models/BoostersModel';

@Injectable({
  providedIn: 'root',
})
export class MagicCardsService {
  constructor(private htttpClient: HttpClient) {}
  private api = 'https://api.magicthegathering.io/v1/';

  getSetsByName(concatName: string) {
    return this.htttpClient.get<SetsModel>(
      this.api + 'sets?name=' + concatName
    );
  }

  getBoostersById(id: string) {
    return this.htttpClient.get<BoostersModel[]>(
      this.api + `sets/${id}/booster`
    );
  }
}
