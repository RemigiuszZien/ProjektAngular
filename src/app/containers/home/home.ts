
import { Component, signal, ChangeDetectionStrategy, computed, inject } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Slide } from '../../shared/interfaces/slide';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  slides: Slide[] = [
    { id: 's4', image: 'https://picsum.photos/1200/500?random=4', title: 'Shadow', text: 'Trickster, Saboteur, Assassin', class: 'Shadow' },
    { id: 's1', image: 'https://picsum.photos/1200/500?random=1', title: 'Marauder', text: 'Berserker, Chieftain, Juggernaut', class: 'Marauder' },
    { id: 's2', image: 'https://picsum.photos/1200/500?random=2', title: 'Witch', text: 'Occultist, Elementalist, Necromancer', class: 'Witch' },
    { id: 's3', image: 'https://picsum.photos/1200/500?random=3', title: 'Templar', text: 'Hierophant, Guardian, Inquisitor', class: 'Templar' },
    { id: 's5', image: 'https://picsum.photos/1200/500?random=5', title: 'Scion', text: 'Ascendant', class: 'Scion' },
    { id: 's6', image: 'https://picsum.photos/1200/500?random=6', title: 'Ranger', text: 'Deadeye, Pathfinder, Warden', class: 'Ranger' },
    { id: 's7', image: 'https://picsum.photos/1200/500?random=7', title: 'Duelist', text: 'Slayer, Champion, Gladiator', class: 'Duelist' },
  ];
  private readonly router = inject(Router);

  showBuilds(slide: Slide) {
    this.router.navigate(['/buildy'], { queryParams: { class: slide.class } });
  }
}
