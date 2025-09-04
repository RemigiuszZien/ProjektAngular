import { Component, ChangeDetectionStrategy, computed, signal } from '@angular/core';
import { inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { BuildRealtimeService } from '../../services/build-realtime.service';

export interface BreadcrumbItem {
  label: string;
  url?: string;
  isActive: boolean;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  private readonly router = inject(Router);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly buildService = inject(BuildRealtimeService);
  
  private readonly currentUrl = signal<string>(this.router.url);
  
  readonly breadcrumbs = computed(() => this.buildBreadcrumbs());

  constructor() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.router.url)
      )
      .subscribe(url => this.currentUrl.set(url));
  }

  private buildBreadcrumbs(): BreadcrumbItem[] {
    const url = this.currentUrl();
    const breadcrumbs: BreadcrumbItem[] = [];
    
    breadcrumbs.push({
      label: 'Home',
      url: '/',
      isActive: url === '/'
    });

    if (url.startsWith('/buildy')) {
      breadcrumbs.push({
        label: 'Buildy',
        url: '/buildy',
        isActive: url === '/buildy'
      });
    }

    if (url.startsWith('/build/')) {
      const buildId = url.split('/build/')[1];
      if (buildId) {
        const build = this.buildService.getBuildById(buildId);
        const buildClass = build?.class || '';
        
        breadcrumbs.push({
          label: 'Buildy',
          url: buildClass ? `/buildy?class=${encodeURIComponent(buildClass)}` : '/buildy',
          isActive: false
        });
        breadcrumbs.push({
          label: build?.name || 'Build Details',
          isActive: true
        });
      }
    }

    return breadcrumbs;
  }

  navigateTo(url?: string) {
    if (url) {
      if (url.includes('?')) {
        const [path, queryString] = url.split('?');
        const queryParams = new URLSearchParams(queryString);
        const queryObject: Record<string, string> = {};
        
        queryParams.forEach((value, key) => {
          queryObject[key] = value;
        });
        
        this.router.navigate([path], { queryParams: queryObject });
      } else {
        this.router.navigate([url]);
      }
    }
  }
}
