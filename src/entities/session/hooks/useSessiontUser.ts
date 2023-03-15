import { useContext, useEffect, useState } from 'react';

import { SessionContext } from '@shared/lib';
import { User } from '@shared/types';

export const useSessiontUser = () => {
  const [sessiontUser, setSessiontUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isPending, setIsPending] = useState<boolean>(false);
  const context = useContext(SessionContext);

  useEffect(() => {
    setSessiontUser(context.user);
    setIsAuth(context.isAuth);
    setIsAdmin(context.isAdmin);
    setIsPending(context.isPending);
  }, [context.user, context.isPending]);

  return { sessiontUser, isAuth, isAdmin, isPending };
};
