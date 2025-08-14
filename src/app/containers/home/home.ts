import { Component } from '@angular/core';
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
})
export class Home {
  slides: Slide[] = [
    {
      id: 's1',
      image: 'https://picsum.photos/1200/500?random=1',
      title: 'Marauder',
      text: 'Berserker, Chieftain, Juggernaut',
      items: [
        {
          name: 'Cast when Stunned autobomber Chieftain',
          equipment: 'Hełm z Runami, Zbroja Wojownika, Młot Gromu',
          skills: 'Cast when Stunned, Molten Shell, Enduring Cry',
        },
        {
          name: 'Blade Vortex Juggernaut',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
    {
      id: 's2',
      image: 'https://picsum.photos/1200/500?random=2',
      title: 'Witch',
      text: 'Occultist, Elementalist, Necromancer',
      items: [
        {
          name: 'Raise Spectre Necromancer',
          equipment: 'Spectre Helm, Necro Robe, Wand',
          skills: 'Raise Spectre, Summon Skeletons',
        },
        {
          name: 'Summon Raging Spirits Necromancer',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
    {
      id: 's3',
      image: 'https://picsum.photos/1200/500?random=3',
      title: 'Templar',
      text: 'Hierophant, Guardian, Inquisitor',
      items: [
        {
          name: 'Archmage Hierophant',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Penance Brand of Dissipation Inquisitor',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
    {
      id: 's4',
      image: 'https://picsum.photos/1200/500?random=4',
      title: 'Shadow',
      text: 'Trickster, Saboteur, Assassin',
      items: [
        {
          name: 'Lightning Strike Trickster',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Hexblast Mines Saboteur',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
    {
      id: 's5',
      image: 'https://picsum.photos/1200/500?random=5',
      title: 'Scion',
      text: 'Ascendant',
      items: [
        {
          name: 'Aurabot Ascendant',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Merc Carry Ascendant',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
    {
      id: 's6',
      image: 'https://picsum.photos/1200/500?random=6',
      title: 'Ranger',
      text: 'Deadeye, Pathfinder, Warden',
      items: [
        {
          name: 'Viper Strike of Mamba Pathfinder',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Tornado Shot Warden',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
    {
      id: 's7',
      image: 'https://picsum.photos/1200/500?random=7',
      title: 'Duelist',
      text: 'Slayer, Champion, Gladiator',
      items: [
        {
          name: 'Smite Slayer',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Lacerate Gladiator',
          equipment: 'Placeholder Hełm, Placeholder Zbroja, Placeholder Broń',
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
  ];

  selectedSlide?: Slide;
  selectedBuild?: Build;

  showBuilds(slide: Slide): void {
    this.selectedSlide = slide;
  }
  closeBuilds(): void {
    this.selectedSlide = undefined;
  }
  showBuildDetails(build: Build): void {
    this.selectedBuild = build;
  }
  closeBuildDetails(): void {
    this.selectedBuild = undefined;
  }
}
