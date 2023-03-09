import dayjs from 'dayjs';
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
  period?: PredictionsPeriodParam;
}

export interface PredictionsPeriodParam {
  month: number;
  year: number;
}

export const usePredictions = ({
  hasScore,
  take,
  period,
}: PredictionsParams) => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const queryConstraints: QueryConstraint[] = [
    where('hasScore', '==', hasScore),
    orderBy('startTime', 'asc'),
  ];

  if (take) {
    queryConstraints.push(limit(take));
  }

  if (period) {
    const month = period.month;
    const year = period.year;
    const date = dayjs({ month, year });
    const startMonthTime = date.startOf('month').toDate();
    const endMonthTime = date.endOf('month').toDate();

    queryConstraints.push(where('startTime', '>=', startMonthTime));
    queryConstraints.push(where('startTime', '<=', endMonthTime));
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
  }, [period]);

  return { predictions };
};
