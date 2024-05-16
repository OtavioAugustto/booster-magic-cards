export class SetsModel {
  sets: SetsItemsModel[] = [];
  mkm_name: string = '';
  releaseDate: string = '';
  magicCardsInfoCode: string = '';
  block: string = '';
}
export class SetsItemsModel {
  code: string = '';
  name: string = '';
  type: string = '';
  border: string = '';
  mkm_id: number = 0;
  booster: [] = [];
}
export class BoostersModel {
  cards: BoostersItemsModel[] = [];
}

export class BoostersItemsModel {
  name: string = '';
  manaCost: string = '';
  cmc: number = 0;
  colors: string[] = [];
  type: string = '';
  types: string[] = [];
  subtypes: string[] = [];
  colorIdentity: string[] = [];
  text: string = '';
  imageUrl: string = '';
}
