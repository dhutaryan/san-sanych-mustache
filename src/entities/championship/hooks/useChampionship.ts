import { useState } from 'react';

import { createChampionship, updateChampionship } from '@shared/api';

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

  const update = async (id: string, champ: CreateChampionship) => {
    setIsPending(true);
    try {
      await updateChampionship(id, champ);
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
    }
  };

  const toggleActivation = async (id: string, active: boolean) => {
    setIsPending(true);
    try {
      await updateChampionship(id, { active });
      setIsPending(false);
    } catch (error) {
      setIsPending(false);
    }
  };

  return { isPending, create, update, toggleActivation };
};
