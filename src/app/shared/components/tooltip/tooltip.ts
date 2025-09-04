import { Component, input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { Equipment } from '../../services/build-realtime.service';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  readonly item = input<Equipment>();
  readonly slotName = input<string>('');
  readonly x = input<number>(0);
  readonly y = input<number>(0);

  @HostBinding('style.left.px') 
  get leftPosition() { 
    return this.x(); 
  }

  @HostBinding('style.top.px') 
  get topPosition() { 
    return this.y(); 
  }

  formatStatType(type: string): string {
    return type.replace(/_/g, ' ');
  }

  getRarityClass(rarity: string): string {
    return `rarity-${rarity}`;
  }
}
