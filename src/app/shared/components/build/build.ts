import { Component, input, output, ChangeDetectionStrategy, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Equipment } from '../equipment-grid/equipment-grid';

@Component({
  selector: 'app-build',
  templateUrl: './build.html',
  styleUrl: './build.scss',
  imports: [Equipment, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Build {
  build = input<any | undefined>(undefined);
  close = output<void>();
  selectedItem = signal<any | null>(null);
  showItemMods(name: string) {
    this.selectedItem.set(null);
  }
  closeItemModal() {
    this.selectedItem.set(null);
  }
}
