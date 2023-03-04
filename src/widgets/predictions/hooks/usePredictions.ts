import {
  limit,
  orderBy,
  query,
  QueryConstraint,
  Unsubscribe,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { predictionsCollection, predictionsSnapshot } from '@shared/api';
import { Prediction, PredictionDocument } from '@shared/types';

export interface PredictionsParams {
  hasScore: boolean;
  take?: number;
}

export const usePredictions = ({ hasScore, take }: PredictionsParams) => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const queryConstraints: QueryConstraint[] = [
    where('hasScore', '==', hasScore),
    orderBy('startTime', 'asc'),
  ];

  if (take) {
    queryConstraints.push(limit(take));
  }

  const predictionsQuery = query<PredictionDocument>(
    predictionsCollection,
    ...queryConstraints,
  );

  useEffect(() => {
    const unsubscribe: Unsubscribe = predictionsSnapshot(
      predictionsQuery,
      setPredictions,
    );

    return unsubscribe;
  }, []);

  return { predictions };
};
