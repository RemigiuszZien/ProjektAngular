import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore, doc, CollectionReference } from '@angular/fire/firestore';
import { inject } from '@angular/core';
import { SkillGem } from '../interfaces/skill-gem';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SkillGemService {
  private firestore = inject(Firestore);

  getSkillGemsForBuild(buildId: string): Observable<SkillGem[]> {
    const buildRef = doc(this.firestore, `builds/${buildId}`);
    const skillGemsRef = collection(buildRef, 'skillgems') as CollectionReference;
    return collectionData(skillGemsRef, { idField: 'id' }) as Observable<SkillGem[]>;
  }
}
