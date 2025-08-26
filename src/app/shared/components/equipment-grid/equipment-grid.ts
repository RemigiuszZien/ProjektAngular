import { Component, ChangeDetectionStrategy, input } from '@angular/core';


@Component({
  selector: 'app-equipment-grid',
  templateUrl: './equipment-grid.html',
  styleUrl: './equipment-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Equipment {
  readonly slots = input<any[]>();

  private readonly SLOT_ORDER = [
    'helmet',
    'right-hand',
    'left-hand',
    'chest',
    'left-ring',
    'right-ring',
    'amulet',
    'belt',
    'gloves',
    'boots',
    'flask1',
    'flask2',
    'flask3',
    'flask4',
    'flask5',
  ];
  private readonly SLOT_MAP: Record<string, string> = {
    'helmet': 'helmet',
    'left-hand': 'left-hand',
    'right-hand': 'right-hand',
    'chest': 'chest',
    'left-ring': 'left-ring',
    'right-ring': 'right-ring',
    'amulet': 'amulet',
    'belt': 'belt',
    'gloves': 'gloves',
    'boots': 'boots',
    'flask1': 'flask1',
    'flask2': 'flask2',
    'flask3': 'flask3',
    'flask4': 'flask4',
    'flask5': 'flask5',
  };


  getSlotClass(slot: string): string {
    return 'poe-slot-' + (this.SLOT_MAP[slot] ?? slot);
  }

  fixIconPath(icon: string | undefined): string | undefined {
    if (!icon) return undefined;
    return icon.startsWith('public/') ? icon.replace('public/', '/') : icon;
  }


  get canonicalSlots() {
    const slots = this.slots() ?? [];
    return this.SLOT_ORDER.map(slotName => {
      const found = slots.find((s: any) => s.slot === slotName);
      return found ? { slot: slotName, item: found } : { slot: slotName };
    });
  }
}
