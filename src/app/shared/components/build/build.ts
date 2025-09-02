import { Component, input, output, ChangeDetectionStrategy, signal, computed } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { EquipmentGrid } from '../equipment-grid/equipment-grid';
import { BuildRealtimeDoc, Equipment } from '../../services/build-realtime.service';

@Component({
  selector: 'app-build',
  templateUrl: './build.html',
  styleUrl: './build.scss',
  imports: [EquipmentGrid, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Build {
  build = input<BuildRealtimeDoc | null>(null);
  close = output<void>();
  selectedItem = signal<Equipment | null>(null);
  
  equipment = computed(() => this.build()?.equipment ?? []);
  
}
