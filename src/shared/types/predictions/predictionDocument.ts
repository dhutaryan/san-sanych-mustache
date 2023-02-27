import { DocumentReference } from 'firebase/firestore';

import { ChampionshipDocument } from '../championships';

export interface PredictionDocument {
  startTime: number;
  championship: DocumentReference<ChampionshipDocument>;
  team1: PredictionTeam;
  team2: PredictionTeam;
  readonly hasScore: boolean;
}

export interface PredictionTeam {
  name: string;
  primaryPoint: number;
  secondaryPoint: number;
  score?: number;
}
