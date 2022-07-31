import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Prediction } from './models';

@Injectable({ providedIn: 'root' })
export class PredictionsService {
  constructor(private firestore: Firestore) {}

  getAll(): Observable<Prediction[]> {
    const collectionRef = collection(
      this.firestore,
      'predictions'
    ) as CollectionReference<Prediction>;

    return collectionData<Prediction>(collectionRef, { idField: 'id' });
  }
}
