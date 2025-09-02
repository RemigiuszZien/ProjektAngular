import { Component, ChangeDetectionStrategy, computed, signal, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildRealtimeService, BuildRealtimeDoc } from '../../shared/services/build-realtime.service';
import { BuildImageService } from '../../shared/services/build-image.service';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.html',
  styleUrl: './builds.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BuildsComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly buildService = inject(BuildRealtimeService);
  private readonly imageService = inject(BuildImageService);

  private readonly selectedClass = signal<string>('');
  
  readonly builds = computed(() => {
    const className = this.selectedClass();
    if (className) {
      return this.buildService.getBuildsByClass(className);
    }
    return this.buildService.getBuilds();
  });

  readonly selectedClassName = this.selectedClass.asReadonly();
  readonly loading = this.buildService.loading;
  readonly error = this.buildService.errorMessage;

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      this.selectedClass.set(params.get('class') || '');
    });
  }

  goToBuild(id: string) {
    this.router.navigate(['/build', id]);
  }

  goBack() {
    window.history.back();
  }

  retryLoad() {
    this.buildService.refreshBuilds();
  }

  getBuildImage(build: BuildRealtimeDoc): string {
    return this.imageService.getBuildImage(build.name, build.class, (build as any).image);
  }
}
