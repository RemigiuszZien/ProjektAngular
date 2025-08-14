import { Build } from './build';

export interface Slide {
  id: string;
  image: string;
  title?: string;
  text?: string;
  items?: Build[];
}
