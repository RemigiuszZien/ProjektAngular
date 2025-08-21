import { Component, input, output, ChangeDetectionStrategy, signal, effect } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Build as BuildInterface } from '../../interfaces/build';
import { Equipment } from '../equipment-grid/equipment-grid';
import { ItemService, Item } from '../../services/item.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.html',
  styleUrl: './build.scss',
  imports: [Equipment, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Build {
  build = input<BuildInterface | undefined>(undefined);
  close = output<void>();
  private itemService = new ItemService();
  selectedItem = signal<Item | null>(null);

  showItemMods(name: string) {
    this.itemService.getItemById(name).subscribe(item => {
      this.selectedItem.set(item ?? null);
    });
  }
  closeItemModal() {
    this.selectedItem.set(null);
  }
}
