import { useEffect, useState } from 'react';

import { getUser, setUser } from '@shared/api';
import { auth } from '@shared/configs';
import { SessionContext } from '@shared/lib';
import { User, UserDocument, UserRole } from '@shared/types';

export const withSession = (component: () => React.ReactNode) => () => {
  const [sessionUser, setSessionUser] = useState<User | null>(null);

  const setUserData = (userId: string, userData: UserDocument | undefined) => {
    if (userData) {
      const user: User = { ...userData, id: userId };
      setSessionUser(user);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userId = authUser.uid;
        const userData = await getUser(userId);
        setUserData(userId, userData);

        if (!userData) {
          await setUser(authUser);
          const userData = await getUser(userId);
          setUserData(userId, userData);
        }
      }
    });

    return unsubscribe;
  }, []);

  return (
    <SessionContext.Provider
      value={{
        user: sessionUser,
        isAuth: !!sessionUser,
        isAdmin: sessionUser?.role === UserRole.ADMIN,
      }}
    >
      {component()}
    </SessionContext.Provider>
  );
};
