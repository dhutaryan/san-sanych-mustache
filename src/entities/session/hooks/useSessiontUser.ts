import { useContext } from 'react';

import { SessionContext } from '@shared/lib';

export const useSessiontUser = () => {
  const { user, isAuth, isAdmin, isPending } = useContext(SessionContext);

  return {
    user,
    isAuth,
    isAdmin,
    isPending,
  };
};
