import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Item {
  name: string;
  icon: string;
  lines: string[];
}

@Injectable({ providedIn: 'root' })
export class ItemService {
  private firestore = inject(Firestore);

  getItemById(itemId: string): Observable<Item | undefined> {
    const itemDoc = doc(this.firestore, `items/${itemId}`);
    return docData(itemDoc) as Observable<Item | undefined>;
  }
}
