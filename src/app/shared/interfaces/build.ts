import { EquipmentSlot } from './equipment-slot';
import { SkillGem } from './skill-gem';
export interface Build {
  name: string;
  equipment: EquipmentSlot[];
  skills?: string;
  skillGems?: SkillGem[];
}
