import { Component, ChangeDetectionStrategy, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildRealtimeService } from '../../shared/services/build-realtime.service';
import { BuildImageService } from '../../shared/services/build-image.service';
import { EquipmentGrid } from '../../shared/components/equipment-grid/equipment-grid';
import { SkillGemsComponent } from '../../shared/components/skill-gems/skill-gems';

@Component({
  selector: 'app-build-details',
  templateUrl: './build-details.html',
  styleUrls: ['./build-details.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [EquipmentGrid, SkillGemsComponent],
})
export class BuildDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly buildService = inject(BuildRealtimeService);
  private readonly imageService = inject(BuildImageService);
  private readonly buildId = signal<string>('');

  readonly build = computed(() => {
    const id = this.buildId();
    return id ? this.buildService.getBuildById(id) : null;
  });

  readonly equipment = computed(() => this.build()?.equipment ?? []);
  readonly skillgems = computed(() => this.build()?.skillgems ?? []);
  readonly loading = this.buildService.loading;
  readonly error = this.buildService.errorMessage;
  
  readonly buildImage = computed(() => {
    const currentBuild = this.build();
    if (!currentBuild) return '';
    return this.imageService.getBuildImage(
      currentBuild.name,
      currentBuild.class,
      (currentBuild as any).image
    );
  });

  constructor() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.buildId.set(id || '');
    });
  }

  goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  retryLoad(): void {
    this.buildService.refreshBuilds();
  }
}
