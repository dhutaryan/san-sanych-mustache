import { useContext, useEffect, useState } from 'react';

import { SessionContext } from '@shared/lib';
import { User } from '@shared/types';

export const useSessiontUser = () => {
  const [sessiontUser, setSessiontUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const context = useContext(SessionContext);

  useEffect(() => {
    setSessiontUser(context.user);
    setIsAuth(context.isAuth);
  }, [context.user]);

  return { sessiontUser, isAuth };
};
