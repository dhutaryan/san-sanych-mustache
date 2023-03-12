import { User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { UserDocument, UserRole } from '../../types';
import { usersCollection } from '../collections';

export async function setUser(user: User): Promise<void> {
  const userRef = doc(usersCollection, user.uid);

  await setDoc(userRef, {
    email: user.email,
    displayName: user.displayName,
    role: UserRole.USER,
  });
}

export async function getUser(
  userId: string,
): Promise<UserDocument | undefined> {
  const docRef = doc(usersCollection, userId);
  const userDoc = await getDoc(docRef);

  return userDoc.data();
}
