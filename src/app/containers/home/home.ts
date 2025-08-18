import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Slide } from '../../shared/interfaces/slide';
import { Build } from '../../shared/interfaces/build';
import { Build as BuildComponent } from '../../shared/components/build/build';
import { EquipmentGridComponent } from '../../shared/components/equipment-grid/equipment-grid';

import { EquipmentSlot } from '../../shared/interfaces/equipment-slot';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Carousel, BuildComponent, EquipmentGridComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
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
          equipment: [
            { slot: 'helmet', item: { name: 'Iron Helmet', icon: '/public/helmet.png' } },
            { slot: 'amulet', item: { name: 'Gold Amulet', icon: '/public/amulet.png' } },
            { slot: 'body', item: { name: 'Steel Armor', icon: '/public/armor.png' } },
            { slot: 'belt', item: { name: 'Leather Belt', icon: '/public/belt.png' } },
            { slot: 'gloves', item: { name: 'Iron Gloves', icon: '/public/gloves.png' } },
            { slot: 'boots', item: { name: 'Leather Boots', icon: '/public/boots.png' } },
            { slot: 'leftRing', item: { name: 'Sapphire Ring', icon: '/public/ring.png' } },
            { slot: 'rightRing', item: { name: 'Ruby Ring', icon: '/public/ring.png' } },
            { slot: 'weapon1', item: { name: 'Sword', icon: '/public/sword.png' } },
            { slot: 'weapon2', item: { name: 'Axe', icon: '/public/axe.png' } },
            { slot: 'flask1', item: { name: 'Life Flask', icon: '/public/flask.png' } },
            { slot: 'flask2', item: { name: 'Mana Flask', icon: '/public/flask.png' } },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Cast when Stunned, Molten Shell, Enduring Cry',
        },
        {
          name: 'Blade Vortex Juggernaut',
          equipment: [
            { slot: 'helmet', item: { name: 'Iron Helmet', icon: '/public/helmet.png' } },
            { slot: 'amulet', item: { name: 'Gold Amulet', icon: '/public/amulet.png' } },
            { slot: 'body', item: { name: 'Steel Armor', icon: '/public/armor.png' } },
            { slot: 'belt', item: { name: 'Leather Belt', icon: '/public/belt.png' } },
            { slot: 'gloves', item: { name: 'Iron Gloves', icon: '/public/gloves.png' } },
            { slot: 'boots', item: { name: 'Leather Boots', icon: '/public/boots.png' } },
            { slot: 'leftRing', item: { name: 'Sapphire Ring', icon: '/public/ring.png' } },
            { slot: 'rightRing', item: { name: 'Ruby Ring', icon: '/public/ring.png' } },
            { slot: 'weapon1', item: { name: 'Sword', icon: '/public/sword.png' } },
            { slot: 'weapon2', item: { name: 'Axe', icon: '/public/axe.png' } },
            { slot: 'flask1', item: { name: 'Life Flask', icon: '/public/flask.png' } },
            { slot: 'flask2', item: { name: 'Mana Flask', icon: '/public/flask.png' } },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
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
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Raise Spectre, Summon Skeletons',
        },
        {
          name: 'Summon Raging Spirits Necromancer',
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
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
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Penance Brand of Dissipation Inquisitor',
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
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
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Hexblast Mines Saboteur',
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
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
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Merc Carry Ascendant',
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
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
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Tornado Shot Warden',
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
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
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
        {
          name: 'Lacerate Gladiator',
          equipment: [
            { slot: 'helmet' },
            { slot: 'amulet' },
            { slot: 'body' },
            { slot: 'belt' },
            { slot: 'gloves' },
            { slot: 'boots' },
            { slot: 'leftRing' },
            { slot: 'rightRing' },
            { slot: 'weapon1' },
            { slot: 'weapon2' },
            { slot: 'flask1' },
            { slot: 'flask2' },
            { slot: 'flask3' },
            { slot: 'flask4' },
            { slot: 'flask5' }
          ],
          skills: 'Placeholder Skill 1, Placeholder Skill 2',
        },
      ],
    },
  ];

  selectedSlide = signal<Slide | undefined>(undefined);
  selectedBuild = signal<Build | undefined>(undefined);

  showBuilds = (slide: Slide) => this.selectedSlide.set(slide);
  closeBuilds = () => this.selectedSlide.set(undefined);
  showBuildDetails = (build: Build) => this.selectedBuild.set(build);
  closeBuildDetails = () => this.selectedBuild.set(undefined);
}
