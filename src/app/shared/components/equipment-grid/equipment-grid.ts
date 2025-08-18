import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EquipmentSlot } from '../../interfaces/equipment-slot';

@Component({
  selector: 'app-equipment-grid',
  standalone: true,
  templateUrl: './equipment-grid.html',
  styleUrl: './equipment-grid.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentGridComponent {
  @Input() slots: EquipmentSlot[] = [];
}
