import { FC } from 'react';

import { PredictionsList } from '@entities/prediction';

import { PredictionsParams, usePredictions } from '../hooks';

type Props = Omit<PredictionsParams, 'hasScore'>;

export const UpcomingPredictions: FC<Props> = ({ take }) => {
  const { predictions } = usePredictions({ hasScore: false, take });

  return <PredictionsList cardType="upcoming" predictions={predictions} />;
};
