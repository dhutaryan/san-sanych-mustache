import { ChampionshipDocument } from './championshipDocument';

export interface Championship extends ChampionshipDocument {
  readonly id: string;
}
