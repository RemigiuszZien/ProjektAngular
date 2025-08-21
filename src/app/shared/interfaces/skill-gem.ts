export interface SkillGem {
  name: string;
  icon: string;
  level: number;
  quality?: number;
  corrupted?: boolean;
  awakened?: boolean;
  support?: boolean;
  description?: string;
}
