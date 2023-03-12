import { createContext } from 'react';

import { User } from '../../types';

interface Session {
  user: User | null;
  isAuth: boolean;
  isAdmin: boolean;
}

export const SessionContext = createContext<Session>({
  user: null,
  isAuth: false,
  isAdmin: false,
});
