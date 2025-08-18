export interface EquipmentSlot {
  slot: string;
  item?: EquipmentItem;
}

export interface EquipmentItem {
  name: string;
  icon: string;
  stats?: string[];
}
