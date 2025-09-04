import { Component, ChangeDetectionStrategy, computed, signal, inject, effect, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('classSelect') classSelect!: ElementRef<HTMLSelectElement>;
  
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly buildService = inject(BuildRealtimeService);
  private readonly imageService = inject(BuildImageService);

  readonly selectedClass = signal<string>('');
  readonly availableClasses = ['Shadow', 'Templar', 'Duelist', 'Witch', 'Marauder', 'Ranger', 'Scion'];
  
  readonly builds = computed(() => {
    const className = this.selectedClass();
    if (className) {
      return this.buildService.getBuildsByClass(className);
    }
    return this.buildService.getBuilds();
  });

  readonly selectedClassValue = computed(() => this.selectedClass());
  readonly loading = this.buildService.loading;
  readonly error = this.buildService.errorMessage;

  constructor() {
    this.route.queryParamMap.subscribe(params => {
      const classParam = params.get('class') || '';
      this.selectedClass.set(classParam);
    });

    effect(() => {
      const classValue = this.selectedClass();
      
      setTimeout(() => {
        if (this.classSelect?.nativeElement) {
          this.classSelect.nativeElement.value = classValue;
        }
      });
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

  onClassChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedClass = selectElement.value;
    
    if (selectedClass) {
      this.router.navigate(['/buildy'], { 
        queryParams: { class: selectedClass }, 
        queryParamsHandling: 'replace' 
      });
    } else {
      this.router.navigate(['/buildy'], { 
        queryParamsHandling: 'replace' 
      });
    }
  }
}
