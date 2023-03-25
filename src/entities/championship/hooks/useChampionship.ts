import { useState } from 'react';

import { createChampionship } from '@shared/api';

export interface CreateChampionship {
  name: string;
}

export const useChampionship = () => {
  const [isPending, setIsPending] = useState<boolean>(false);

  const create = async (champ: CreateChampionship) => {
    setIsPending(true);
    try {
      await createChampionship({ ...champ, active: true });
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
    }
  };

  return { isPending, create };
};
