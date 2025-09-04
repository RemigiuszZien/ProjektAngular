import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { SkillGem } from '../../services/build-realtime.service';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-skill-gems',
  templateUrl: './skill-gems.html',
  styleUrl: './skill-gems.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TitleCasePipe]
})
export class SkillGemsComponent {
  readonly skillgems = input<SkillGem[]>();

  getGemTypeClass(gem: SkillGem): string {
    return `gem-${gem.type}`;
  }

  getLinkClass(gem: SkillGem): string {
    const linkCount = gem.links?.length || 0;
    return `links-${linkCount}`;
  }

  getQualityClass(quality: number): string {
    if (quality >= 20) return 'quality-perfect';
    if (quality >= 15) return 'quality-high';
    if (quality >= 10) return 'quality-medium';
    return 'quality-low';
  }
}
