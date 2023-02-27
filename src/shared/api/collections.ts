import { collection, CollectionReference } from 'firebase/firestore';

import { db } from '@shared/configs';
import { PredictionDocument } from '@shared/types';

export const predictionsCollection = collection(
  db,
  'predictions',
) as CollectionReference<PredictionDocument>;
