import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MagicCardsService {
  constructor(private htttpClient: HttpClient) {}
  private api = 'https://api.magicthegathering.io/v1/';

  getSetsByName(concatName: string) {
    return this.htttpClient.get<any>(this.api + 'sets?name=' + concatName);
  }
}
