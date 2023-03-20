import {
  orderBy,
  query,
  QueryConstraint,
  Unsubscribe,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { championshipsCollection, championshipsSnapshot } from '@shared/api';
import { Championship, ChampionshipDocument } from '@shared/types';

export const useChampionships = () => {
  const [championships, setChampionships] = useState<Championship[]>([]);
  const queryConstraints: QueryConstraint[] = [orderBy('name', 'asc')];

  const championshipsQuery = query<ChampionshipDocument>(
    championshipsCollection,
    ...queryConstraints,
  );

  useEffect(() => {
    const unsubscribe: Unsubscribe = championshipsSnapshot(
      championshipsQuery,
      setChampionships,
    );

    return unsubscribe;
  }, []);

  return { championships };
};
