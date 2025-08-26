
import { Component, signal, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Slide } from '../../shared/interfaces/slide';
import { Build as BuildComponent } from '../../shared/components/build/build';
import { BuildRealtimeService, BuildRealtimeDoc } from '../../shared/services/build-realtime.service';

@Component({
  selector: 'app-home',
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
    { id: 's4', image: 'https://picsum.photos/1200/500?random=4', title: 'Shadow', text: 'Trickster, Saboteur, Assassin', class: 'Shadow' },
    { id: 's1', image: 'https://picsum.photos/1200/500?random=1', title: 'Marauder', text: 'Berserker, Chieftain, Juggernaut', class: 'Marauder' },
    { id: 's2', image: 'https://picsum.photos/1200/500?random=2', title: 'Witch', text: 'Occultist, Elementalist, Necromancer', class: 'Witch' },
    { id: 's3', image: 'https://picsum.photos/1200/500?random=3', title: 'Templar', text: 'Hierophant, Guardian, Inquisitor', class: 'Templar' },
    { id: 's5', image: 'https://picsum.photos/1200/500?random=5', title: 'Scion', text: 'Ascendant', class: 'Scion' },
    { id: 's6', image: 'https://picsum.photos/1200/500?random=6', title: 'Ranger', text: 'Deadeye, Pathfinder, Warden', class: 'Ranger' },
    { id: 's7', image: 'https://picsum.photos/1200/500?random=7', title: 'Duelist', text: 'Slayer, Champion, Gladiator', class: 'Duelist' },
  ];
  selectedSlide = signal<Slide | undefined>(undefined);
  builds = signal<BuildRealtimeDoc[]>([]);
  selectedBuild = signal<BuildRealtimeDoc | undefined>(undefined);


  private readonly buildService = inject(BuildRealtimeService);
  // subscribe on initialization (keeps original behavior)
  private readonly _sub = this.buildService.getBuilds().subscribe(builds => {
    console.log('Fetched builds:', builds);
    this.builds.set(builds);
    this.selectedSlide.set(this.selectedSlide());
  });

  showBuilds = (slide: Slide) => this.selectedSlide.set(slide);
  closeBuilds = () => {
    this.selectedSlide.set(undefined);
    this.selectedBuild.set(undefined);
  };

  buildsForSelectedClass = computed(() => {
    const slide = this.selectedSlide();
    if (!slide) return [];
    const slideClass = (slide as any).class?.toLowerCase?.() ?? '';
    return this.builds().filter(b => (b.class?.toLowerCase?.() ?? '') === slideClass);
  });

  selectBuild = (build: BuildRealtimeDoc) => this.selectedBuild.set(build);
  closeBuildModal = () => this.selectedBuild.set(undefined);
}
