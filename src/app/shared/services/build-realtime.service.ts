
import { Injectable, signal, computed } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, onValue, Database, DatabaseReference } from 'firebase/database';
import { firebaseConfig } from './firebase-config';

export interface EquipmentStat {
  type: string;
  value: number;
  unit?: string;
}

export interface Equipment {
  name: string;
  icon: string;
  rarity: 'normal' | 'magic' | 'rare' | 'unique';
  baseType?: string;
  stats: EquipmentStat[];
  slot: string;
}

export interface SkillGem {
  name: string;
  icon: string;
  level: number;
  quality: number;
  type: 'active' | 'support';
  links?: string[];
}

export interface BuildRealtimeDoc {
  id: string;
  name: string;
  class: string;
  image?: string;
  equipment: Equipment[];
  skillgems: SkillGem[];
}

@Injectable({ providedIn: 'root' })
export class BuildRealtimeService {
  private readonly app = initializeApp(firebaseConfig);
  private readonly database: Database = getDatabase(this.app);
  private readonly buildsRef: DatabaseReference = ref(this.database, 'builds');
  
  private readonly allBuilds = signal<BuildRealtimeDoc[]>([]);
  private readonly isLoading = signal<boolean>(false);
  private readonly error = signal<string | null>(null);
  
  constructor() {
    this.loadBuilds();
  }

  private async loadBuilds(): Promise<void> {
    this.isLoading.set(true);
    this.error.set(null);
    
    try {
      const snapshot = await get(this.buildsRef);
      if (snapshot.exists()) {
        const buildsData = snapshot.val();
        const builds = Object.entries(buildsData).map(([id, build]: [string, any]) => ({
          ...build,
          id
        }));
        this.allBuilds.set(builds);
      } else {
        this.allBuilds.set([]);
      }
    } catch (error) {
      console.error('Error loading builds:', error);
      this.error.set('Failed to load builds');
      this.allBuilds.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  getBuilds(): BuildRealtimeDoc[] {
    return this.allBuilds();
  }

  getBuildsByClass(className: string): BuildRealtimeDoc[] {
    return this.allBuilds().filter(build => 
      build.class.toLowerCase() === className.toLowerCase()
    );
  }

  getBuildById(id: string): BuildRealtimeDoc | null {
    return this.allBuilds().find(build => build.id === id) ?? null;
  }

  readonly buildsByClass = computed(() => {
    const builds = this.allBuilds();
    const byClass: Record<string, BuildRealtimeDoc[]> = {};
    
    builds.forEach(build => {
      const className = build.class.toLowerCase();
      if (!byClass[className]) {
        byClass[className] = [];
      }
      byClass[className].push(build);
    });
    
    return byClass;
  });

  readonly loading = this.isLoading.asReadonly();
  readonly errorMessage = this.error.asReadonly();
  readonly builds = this.allBuilds.asReadonly();

  enableRealTimeUpdates(): void {
    onValue(this.buildsRef, (snapshot) => {
      if (snapshot.exists()) {
        const buildsData = snapshot.val();
        const builds = Object.entries(buildsData).map(([id, build]: [string, any]) => ({
          ...build,
          id
        }));
        this.allBuilds.set(builds);
      } else {
        this.allBuilds.set([]);
      }
    });
  }

  async refreshBuilds(): Promise<void> {
    await this.loadBuilds();
  }
}
