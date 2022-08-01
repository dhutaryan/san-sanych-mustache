export interface Prediction {
  id: string;
  startTime: number;
  team1: PredictionTeam;
  team2: PredictionTeam;
  hasScore: boolean;
}

export interface PredictionTeam {
  name: string;
  primaryPoint: number;
  secondaryPoint: number;
  score?: number;
}
