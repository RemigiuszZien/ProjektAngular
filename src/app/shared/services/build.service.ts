import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData, doc } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface BuildDoc {
  id: string;
  name: string;
  class: string;
  ascendancy: string;
  description: string;
  items: string[];
  skillGems: string[];
  notes?: string;
  author?: string;
}

@Injectable({ providedIn: 'root' })
export class BuildService {
  private firestore = inject(Firestore);

  getBuilds(): Observable<BuildDoc[]> {
    return collectionData(collection(this.firestore, 'builds'), { idField: 'id' }) as Observable<BuildDoc[]>;
  }

  getBuildById(id: string): Observable<BuildDoc | undefined> {
    return docData(doc(this.firestore, `builds/${id}`)) as Observable<BuildDoc | undefined>;
  }
}
