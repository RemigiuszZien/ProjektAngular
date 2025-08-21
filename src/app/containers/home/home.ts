
import { Component, signal, ChangeDetectionStrategy, effect, computed } from '@angular/core';
import { inject } from '@angular/core';
import { BuildService, BuildDoc } from '../../shared/services/build.service';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Slide } from '../../shared/interfaces/slide';
import { Build } from '../../shared/interfaces/build';
import { Build as BuildComponent } from '../../shared/components/build/build';




@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, BuildComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  showVictoryModal = signal(false);
  openVictoryModal() { this.showVictoryModal.set(true); }
  closeVictoryModal() { this.showVictoryModal.set(false); }
  slides: Slide[] = [
    { id: 's4', image: 'https://picsum.photos/1200/500?random=4', title: 'Shadow', text: 'Trickster, Saboteur, Assassin' },
    { id: 's1', image: 'https://picsum.photos/1200/500?random=1', title: 'Marauder', text: 'Berserker, Chieftain, Juggernaut' },
    { id: 's2', image: 'https://picsum.photos/1200/500?random=2', title: 'Witch', text: 'Occultist, Elementalist, Necromancer' },
    { id: 's3', image: 'https://picsum.photos/1200/500?random=3', title: 'Templar', text: 'Hierophant, Guardian, Inquisitor' },
    { id: 's5', image: 'https://picsum.photos/1200/500?random=5', title: 'Scion', text: 'Ascendant' },
    { id: 's6', image: 'https://picsum.photos/1200/500?random=6', title: 'Ranger', text: 'Deadeye, Pathfinder, Warden' },
    { id: 's7', image: 'https://picsum.photos/1200/500?random=7', title: 'Duelist', text: 'Slayer, Champion, Gladiator' },
  ];



  selectedSlide = signal<Slide | undefined>(undefined);
  builds = signal<BuildDoc[]>([]);
  selectedBuild = signal<BuildDoc | undefined>(undefined);
  selectedBuildForComponent = computed(() => {
    const doc = this.selectedBuild();
    if (!doc) return undefined;
    const poeSlots = [
      'helmet', 'amulet', 'body', 'belt', 'gloves', 'boots',
      'leftRing', 'rightRing', 'weapon1', 'weapon2',
      'flask1', 'flask2', 'flask3', 'flask4', 'flask5'
    ];
    return {
      name: doc.name,
      equipment: (doc.items || []).map((item, idx) => ({
        slot: poeSlots[idx] || `slot${idx+1}`,
        item: { name: item, icon: '' }
      })),
      skills: doc.description,
      skillGems: (doc.skillGems || []).map(name => ({ name, icon: '', level: 1 })),
    };
  });

  private buildService = inject(BuildService);
  constructor() {
    effect(() => {
      this.buildService.getBuilds().subscribe(builds => {
        // Tylko buildy dla Trickstera
        this.builds.set(builds.filter(b => b.ascendancy === 'Trickster'));
      });
    });
  }

  showBuilds = (slide: Slide) => this.selectedSlide.set(slide);
  closeBuilds = () => this.selectedSlide.set(undefined);
  showBuildDetails = (build: BuildDoc) => this.selectedBuild.set(build);
  closeBuildDetails = () => this.selectedBuild.set(undefined);
}
