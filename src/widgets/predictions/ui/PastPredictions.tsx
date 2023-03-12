import { FC } from 'react';

import { PastPredictionCard, PredictionsList } from '@entities/prediction';

import { PredictionsParams, usePredictions } from '../hooks';

type Props = Omit<PredictionsParams, 'hasScore'>;

export const PastPredictions: FC<Props> = ({ take, period }) => {
  const { predictions } = usePredictions({ hasScore: true, take, period });

  return (
    <PredictionsList
      cardComponent={PastPredictionCard}
      predictions={predictions}
    />
  );
};
