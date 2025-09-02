import { Component, ChangeDetectionStrategy, input, computed, ViewContainerRef, inject, OnInit } from '@angular/core';
import { Equipment } from '../../services/build-realtime.service';
import { TooltipService } from '../../services/tooltip.service';
import { AssetPathService } from '../../services/asset-path.service';

interface SlotConfig {
  id: string;
  name: string;
  gridArea: string;
  size: 'small' | 'medium' | 'large';
}

interface SlotWithItem extends SlotConfig {
  item: Equipment | null;
}

@Component({
  selector: 'app-equipment-grid',
  templateUrl: './equipment-grid.html',
  styleUrl: './equipment-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentGrid implements OnInit {
  readonly slots = input<Equipment[]>();
  
  private readonly tooltipService = inject(TooltipService);
  private readonly viewContainerRef = inject(ViewContainerRef);
  private readonly assetPathService = inject(AssetPathService);

  ngOnInit(): void {
    this.tooltipService.setViewContainer(this.viewContainerRef);
  }

  onSlotHover(event: MouseEvent, slot: SlotWithItem): void {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.tooltipService.showTooltip(
      slot.item, 
      slot.name, 
      event.clientX, 
      event.clientY
    );
  }

  onSlotLeave(): void {
    this.tooltipService.hideTooltip();
  }

  onSlotMouseMove(event: MouseEvent): void {
    this.tooltipService.updatePosition(event.clientX, event.clientY);
  }

  private readonly SLOT_CONFIGS: SlotConfig[] = [
    { id: 'helmet', name: 'Helmet', gridArea: 'helmet', size: 'medium' },
    { id: 'amulet', name: 'Amulet', gridArea: 'amulet', size: 'small' },
    { id: 'left-hand', name: 'Left Hand', gridArea: 'left-hand', size: 'large' },
    { id: 'chest', name: 'Chest', gridArea: 'chest', size: 'large' },
    { id: 'right-hand', name: 'Right Hand', gridArea: 'right-hand', size: 'large' },
    { id: 'left-ring', name: 'Left Ring', gridArea: 'left-ring', size: 'small' },
    { id: 'belt', name: 'Belt', gridArea: 'belt', size: 'medium' },
    { id: 'right-ring', name: 'Right Ring', gridArea: 'right-ring', size: 'small' },
    { id: 'gloves', name: 'Gloves', gridArea: 'gloves', size: 'medium' },
    { id: 'boots', name: 'Boots', gridArea: 'boots', size: 'medium' },
    { id: 'flask1', name: 'Flask 1', gridArea: 'flask1', size: 'small' },
    { id: 'flask2', name: 'Flask 2', gridArea: 'flask2', size: 'small' },
    { id: 'flask3', name: 'Flask 3', gridArea: 'flask3', size: 'small' },
    { id: 'flask4', name: 'Flask 4', gridArea: 'flask4', size: 'small' },
    { id: 'flask5', name: 'Flask 5', gridArea: 'flask5', size: 'small' },
  ];

  getSlotConfig(slotId: string): SlotConfig {
    return this.SLOT_CONFIGS.find(config => config.id === slotId) || 
           { id: slotId, name: slotId, gridArea: slotId, size: 'medium' };
  }

  canonicalSlots = computed((): SlotWithItem[] => {
    const slots = this.slots() ?? [];
    const result = this.SLOT_CONFIGS.map(config => {
      const found = slots.find((s: Equipment) => s.slot === config.id);
      const slotData = found ? { 
        ...config, 
        item: found 
      } : { 
        ...config, 
        item: null 
      };
      return slotData;
    });
    return result;
  });

  getItemIconPath(iconPath: string): string {
    return this.assetPathService.getItemIconPath(iconPath);
  }
}