import { FC } from 'react';

import { PredictionCard, PredictionsList } from '@entities/prediction';

import { PredictionsParams, usePredictions } from '../hooks';

type Props = Omit<PredictionsParams, 'hasScore'>;

export const UpcomingPredictions: FC<Props> = ({ take }) => {
  const { predictions } = usePredictions({ hasScore: false, take });

  return (
    <PredictionsList cardComponent={PredictionCard} predictions={predictions} />
  );
};
