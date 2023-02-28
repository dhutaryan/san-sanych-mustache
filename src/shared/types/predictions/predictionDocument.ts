import { DocumentReference, Timestamp } from 'firebase/firestore';

import { ChampionshipDocument } from '../championships';

export interface PredictionDocument {
  startTime: Timestamp;
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
