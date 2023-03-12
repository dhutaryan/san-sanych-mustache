import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '@shared/configs';
import { RoutePath } from '@shared/lib';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState<boolean>(false);
  const navigateDefault = () => navigate(RoutePath.PREDICTIONS);

  const signInWithGoogle = async () => {
    setIsPending(true);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ promt: 'select_account' });

    try {
      await signInWithPopup(auth, provider);
      navigateDefault();
    } catch (error) {
      setIsPending(false);
    }

    setIsPending(false);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return { isPending, signInWithGoogle, logout };
};
