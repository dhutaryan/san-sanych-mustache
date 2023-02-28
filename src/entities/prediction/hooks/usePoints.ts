import { Prediction } from '@shared/types';

export const usePoints = (prediction: Prediction) => {
  const hasSecondaryPoints =
    Number.isInteger(prediction.team1.secondaryPoint) ||
    Number.isInteger(prediction.team2.secondaryPoint);
  const team1SecondaryPoint =
    prediction.team1.secondaryPoint ?? prediction.team1.primaryPoint;
  const team2SecondaryPoint =
    prediction.team2.secondaryPoint ?? prediction.team2.primaryPoint;
  const secondaryPoints = hasSecondaryPoints
    ? `(${team1SecondaryPoint} - ${team2SecondaryPoint})`
    : '';

  return `${prediction.team1.primaryPoint} - ${prediction.team2.primaryPoint} ${secondaryPoints}`;
};
