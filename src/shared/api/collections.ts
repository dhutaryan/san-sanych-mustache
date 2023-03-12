import { collection, CollectionReference } from 'firebase/firestore';

import { db } from '@shared/configs';
import { PredictionDocument, UserDocument } from '@shared/types';

export const predictionsCollection = collection(
  db,
  'predictions',
) as CollectionReference<PredictionDocument>;

export const usersCollection = collection(
  db,
  'users',
) as CollectionReference<UserDocument>;
