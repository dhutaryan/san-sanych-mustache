import { Championship } from '../../championships/models';

export interface Prediction {
  id: string;
  startTime: number;
  championship: Championship;
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
