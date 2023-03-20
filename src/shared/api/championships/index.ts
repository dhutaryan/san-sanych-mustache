import { onSnapshot, Query, Unsubscribe } from 'firebase/firestore';
import { Dispatch, SetStateAction } from 'react';

import { Championship, ChampionshipDocument } from '@shared/types';

export const championshipsSnapshot = (
  query: Query<ChampionshipDocument>,
  setResponse: Dispatch<SetStateAction<Championship[]>>,
): Unsubscribe => {
  return onSnapshot<ChampionshipDocument>(query, {
    next: (snapshot) => {
      const result: Championship[] = snapshot.docs.map((data) => {
        return { ...data.data(), id: data.id };
      });

      setResponse(result);
    },
  });
};
