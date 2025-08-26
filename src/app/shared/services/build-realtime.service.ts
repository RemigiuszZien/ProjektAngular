import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface BuildRealtimeDoc {
  id: string;
  name: string;
  class: string;
  equipment: any[];
  skillgems: any[];
}

@Injectable({ providedIn: 'root' })
export class BuildRealtimeService {
  private dbUrl = 'https://pierwszyprojekt-277f8-default-rtdb.europe-west1.firebasedatabase.app/builds.json';
  private readonly http = inject(HttpClient);

  getBuilds(): Observable<BuildRealtimeDoc[]> {
    return this.http.get<{[classKey: string]: BuildRealtimeDoc}>(this.dbUrl).pipe(
      map(obj => {
        if (!obj) return [];
        return Object.entries(obj)
          .map(([id, build]) => ({ ...build, id }));
      })
    );
  }
}
