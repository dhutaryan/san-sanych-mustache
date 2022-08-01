import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  limit,
  orderBy,
  query,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Prediction } from './models';

@Injectable({ providedIn: 'root' })
export class PredictionsService {
  private readonly collectionRef = collection(
    this.firestore,
    'predictions',
  ) as CollectionReference<Prediction>;

  constructor(private firestore: Firestore) {}

  upcoming(): Observable<Prediction[]> {
    const predictionsQuery = query<Prediction>(
      this.collectionRef,
      where('hasScore', '==', false),
      orderBy('startTime', 'asc'),
    );

    return collectionData<Prediction>(predictionsQuery);
  }

  past(): Observable<Prediction[]> {
    const predictionsQuery = query<Prediction>(
      this.collectionRef,
      where('hasScore', '==', true),
      orderBy('startTime', 'asc'),
      limit(10),
    );

    return collectionData<Prediction>(predictionsQuery);
  }
}
