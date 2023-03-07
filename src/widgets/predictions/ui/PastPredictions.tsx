import { FC } from 'react';

import { PredictionsList } from '@entities/prediction';

import { PredictionsParams, usePredictions } from '../hooks';

type Props = Omit<PredictionsParams, 'hasScore'>;

export const PastPredictions: FC<Props> = ({ take }) => {
  const { predictions } = usePredictions({ hasScore: true, take });

  return <PredictionsList cardType="past" predictions={predictions} />;
};
