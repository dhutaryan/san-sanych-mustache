import { Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  orderBy,
  query,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Championship } from './models';

@Injectable({ providedIn: 'root' })
export class ChampionshipsService {
  private readonly collectionRef = collection(
    this.firestore,
    'championships',
  ) as CollectionReference<Championship>;

  constructor(private firestore: Firestore) {}

  public getAll(): Observable<Championship[]> {
    const championshipsQuery = query<Championship>(
      this.collectionRef,
      orderBy('name', 'asc'),
    );

    return collectionData<Championship>(championshipsQuery);
  }
}
