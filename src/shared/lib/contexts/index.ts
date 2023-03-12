import { createContext } from 'react';

import { User } from '../../types';

interface Session {
  user: User | null;
  isAuth: boolean;
}

export const SessionContext = createContext<Session>({
  user: null,
  isAuth: false,
});
