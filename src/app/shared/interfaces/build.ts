import { EquipmentSlot } from './equipment-slot';

export interface Build {
  name: string;
  equipment: EquipmentSlot[];
  skills: string;
}
