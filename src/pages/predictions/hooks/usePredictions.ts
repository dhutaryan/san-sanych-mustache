import {
  getDoc,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { predictionsCollection } from '@shared/api';
import { Prediction, PredictionDocument } from '@shared/types';

export const usePredictions = () => {
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  const predictionsQuery = query<PredictionDocument>(
    predictionsCollection,
    where('hasScore', '==', false),
    orderBy('startTime', 'asc'),
  );

  useEffect(() => {
    const unsubscribe: Unsubscribe = onSnapshot<PredictionDocument>(
      predictionsQuery,
      {
        next: async (snapshot) => {
          const result: Prediction[] = await Promise.all(
            snapshot.docs.map(async (data) => {
              const docRef = data.data().championship;
              const championshipDoc = await getDoc(docRef);
              const prediction = data.data();

              return {
                ...prediction,
                id: data.id,
                championship: {
                  ...championshipDoc.data(),
                  id: championshipDoc.id,
                },
              };
            }),
          );

          setPredictions(result);

          return unsubscribe;
        },
      },
    );
  }, []);

  return { predictions };
};
