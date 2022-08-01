import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
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

  getAll(): Observable<Prediction[]> {
    const predictionsQuery = query<Prediction>(
      this.collectionRef,
      where('team1.score', '==', null),
      where('team2.score', '==', null),
      orderBy('startTime', 'asc'),
    );

    return collectionData<Prediction>(predictionsQuery);
  }
}
