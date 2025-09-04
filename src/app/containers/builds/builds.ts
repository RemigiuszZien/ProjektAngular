import { Component, ChangeDetectionStrategy, computed, signal, inject, effect, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BuildRealtimeService, BuildRealtimeDoc } from '../../shared/services/build-realtime.service';
import { BuildImageService } from '../../shared/services/build-image.service';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-builds',
  templateUrl: './builds.html',
  styleUrl: './builds.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LoadingSpinnerComponent]
})
export class BuildsComponent {
  @ViewChild('classSelect') classSelect!: ElementRef<HTMLSelectElement>;
  
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly buildService = inject(BuildRealtimeService);
  private readonly imageService = inject(BuildImageService);

  readonly selectedClass = signal<string>('');
  readonly availableClasses = ['Shadow', 'Templar', 'Duelist', 'Witch', 'Marauder', 'Ranger', 'Scion'];
  private readonly retryCount = signal<number>(0);
  private readonly maxRetries = 3;
  
  readonly builds = computed(() => {
    const className = this.selectedClass();
    if (className) {
      return this.buildService.getBuildsByClass(className);
    }
    return this.buildService.getBuilds();
  });

  readonly buildImages = computed(() => 
    this.builds().reduce((acc, build) => {
      acc[build.id] = this.imageService.getBuildImage(build.name, build.class, build.image);
      return acc;
    }, {} as Record<string, string>)
  );

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
    if (window.history.length > 1) {
      window.history.back();
    } else {
      this.router.navigate(['/']);
    }
  }

  retryLoad() {
    const currentRetry = this.retryCount();
    
    if (currentRetry >= this.maxRetries) {
      console.warn('Maximum retry attempts reached');
      return;
    }

    this.retryCount.set(currentRetry + 1);
    
    const delay = Math.pow(2, currentRetry) * 1000;
    
    setTimeout(() => {
      this.buildService.refreshBuilds();

      setTimeout(() => {
        if (this.buildService.errorMessage() === null) {
          this.retryCount.set(0);
        }
      }, 2000);
    }, delay);
  }

  getBuildImage(buildId: string): string {
    return this.buildImages()[buildId] || '';
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
