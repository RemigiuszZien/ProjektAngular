import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Carousel as BSCarousel } from 'bootstrap';

interface Slide {
  id: string;
  image: string;
  title?: string;
  text?: string;
  items?: string[];
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit, OnDestroy {
  @ViewChild('carouselRoot', { static: true }) carouselRoot!: ElementRef<HTMLElement>;

  slides: Slide[] = [
    { id: 's1', image: 'https://picsum.photos/1200/500?random=1', title: 'Marauder', text: 'Berserker, Chieftain, Juggernaut', items: ['Cast when Stunned autobomber Chieftain', 'Blade Vortex Juggernaut', 'Volcanic Fissure of Snaking Berserker'] },
    { id: 's2', image: 'https://picsum.photos/1200/500?random=2', title: 'Witch',  text: 'Occultist, Elementalist, Necromancer', items: ['Raise Spectre Necromancer', 'Summon Raging Spirits Necromancer', 'Blade Vortex Elementalist'] },
    { id: 's3', image: 'https://picsum.photos/1200/500?random=3', title: 'Templar',  text: 'Hierophant, Guardian, Inquisitor', items: ['Archmage Hierophant', 'Penance Brand of Disipation Inquisitor', 'Summon Holy Relic Guardian'] },
    { id: 's4', image: 'https://picsum.photos/1200/500?random=4', title: 'Shadow',  text: 'Trickster, Saboteur, Assassin', items: ['Lightning Strike Trickster', 'Smite of Judgement Trickster', 'Hexblast mines Sabouteur', 'Penance Brand of Disipation Assassin/Trickster'] },
    { id: 's5', image: 'https://picsum.photos/1200/500?random=5', title: 'Scion',  text: 'Ascendant', items: ['Aurabot Ascendant', 'Merc carry Ascendant', 'Power Siphone mines Ascendant'] },
    { id: 's6', image: 'https://picsum.photos/1200/500?random=6', title: 'Ranger',  text: 'Deadeye, Pathfinder, Warden', items: ['Viper Strike of Mamba Pathfinder', 'Blade Vortex Pathfinder', 'Tornado Shot Warden', 'Kinetic Blast Deadeye'] },
    { id: 's7', image: 'https://picsum.photos/1200/500?random=7', title: 'Duelist',  text: 'Slayer, Champion, Gladiator', items: ['Smite Slayer', 'Lacerate Gladiator', 'Splitting Steel Champion'] },
  ];
  
  selectedSlide?: Slide;

  showBuilds(slide: Slide): void {
    this.selectedSlide = slide;
  }
  closeBuilds(): void {
  this.selectedSlide = undefined;
}

  private bsCarousel?: InstanceType<typeof BSCarousel>;

  ngAfterViewInit(): void {
    this.bsCarousel = new BSCarousel(this.carouselRoot.nativeElement, {
      interval: 4000,
      pause: 'hover',
      wrap: true
    });
  }

  prev(): void { this.bsCarousel?.prev(); }
  next(): void { this.bsCarousel?.next(); }

  ngOnDestroy(): void { this.bsCarousel?.dispose(); }
}