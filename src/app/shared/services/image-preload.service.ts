import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ImagePreloadService {
  private preloadedImages = signal<Set<string>>(new Set());
  private loadingImages = signal<Set<string>>(new Set());

  preloadImage(src: string): Promise<boolean> {
    if (this.preloadedImages().has(src)) {
      return Promise.resolve(true);
    }

    if (this.loadingImages().has(src)) {
      return this.waitForImageLoad(src);
    }

    return this.loadImage(src);
  }

  preloadImages(sources: string[]): Promise<boolean[]> {
    return Promise.all(sources.map(src => this.preloadImage(src)));
  }

  isPreloaded(src: string): boolean {
    return this.preloadedImages().has(src);
  }

  private loadImage(src: string): Promise<boolean> {
    this.loadingImages.update(set => new Set([...set, src]));

    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = () => {
        this.preloadedImages.update(set => new Set([...set, src]));
        this.loadingImages.update(set => {
          const newSet = new Set(set);
          newSet.delete(src);
          return newSet;
        });
        resolve(true);
      };
      
      img.onerror = () => {
        this.loadingImages.update(set => {
          const newSet = new Set(set);
          newSet.delete(src);
          return newSet;
        });
        resolve(false);
      };
      
      img.src = src;
    });
  }

  private waitForImageLoad(src: string): Promise<boolean> {
    return new Promise((resolve) => {
      const checkLoaded = () => {
        if (this.preloadedImages().has(src)) {
          resolve(true);
        } else if (!this.loadingImages().has(src)) {
          resolve(false);
        } else {
          setTimeout(checkLoaded, 10);
        }
      };
      checkLoaded();
    });
  }
}
