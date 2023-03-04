import { getDoc, onSnapshot, Query, Unsubscribe } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

import { Prediction, PredictionDocument } from '../../types';

export const predictionsSnapshot = (
  query: Query<PredictionDocument>,
  setResponse: Dispatch<SetStateAction<Prediction[]>>,
): Unsubscribe => {
  return onSnapshot<PredictionDocument>(query, {
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

      setResponse(result);
    },
  });
};
