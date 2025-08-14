import { Component } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Slide } from '../../shared/interfaces/slide';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  slides: Slide[] = [
    {
      id: 's1',
      image: 'https://picsum.photos/1200/500?random=1',
      title: 'Marauder',
      text: 'Berserker, Chieftain, Juggernaut',
      items: [
        'Cast when Stunned autobomber Chieftain',
        'Blade Vortex Juggernaut',
        'Volcanic Fissure of Snaking Berserker',
      ],
    },
    {
      id: 's2',
      image: 'https://picsum.photos/1200/500?random=2',
      title: 'Witch',
      text: 'Occultist, Elementalist, Necromancer',
      items: [
        'Raise Spectre Necromancer',
        'Summon Raging Spirits Necromancer',
        'Blade Vortex Elementalist',
      ],
    },
    {
      id: 's3',
      image: 'https://picsum.photos/1200/500?random=3',
      title: 'Templar',
      text: 'Hierophant, Guardian, Inquisitor',
      items: [
        'Archmage Hierophant',
        'Penance Brand of Disipation Inquisitor',
        'Summon Holy Relic Guardian',
      ],
    },
    {
      id: 's4',
      image: 'https://picsum.photos/1200/500?random=4',
      title: 'Shadow',
      text: 'Trickster, Saboteur, Assassin',
      items: [
        'Lightning Strike Trickster',
        'Smite of Judgement Trickster',
        'Hexblast mines Sabouteur',
        'Penance Brand of Disipation Assassin/Trickster',
      ],
    },
    {
      id: 's5',
      image: 'https://picsum.photos/1200/500?random=5',
      title: 'Scion',
      text: 'Ascendant',
      items: [
        'Aurabot Ascendant',
        'Merc carry Ascendant',
        'Power Siphone mines Ascendant',
      ],
    },
    {
      id: 's6',
      image: 'https://picsum.photos/1200/500?random=6',
      title: 'Ranger',
      text: 'Deadeye, Pathfinder, Warden',
      items: [
        'Viper Strike of Mamba Pathfinder',
        'Blade Vortex Pathfinder',
        'Tornado Shot Warden',
        'Kinetic Blast Deadeye',
      ],
    },
    {
      id: 's7',
      image: 'https://picsum.photos/1200/500?random=7',
      title: 'Duelist',
      text: 'Slayer, Champion, Gladiator',
      items: ['Smite Slayer', 'Lacerate Gladiator', 'Splitting Steel Champion'],
    },
  ];

  selectedSlide?: Slide;

  showBuilds(slide: Slide): void {
    this.selectedSlide = slide;
  }
  closeBuilds(): void {
    this.selectedSlide = undefined;
  }
}
