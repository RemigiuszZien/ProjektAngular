import { Injectable } from '@angular/core';

export interface ClassImageMapping {
  [className: string]: string;
}

@Injectable({ providedIn: 'root' })
export class BuildImageService {
  
  private readonly classImages: ClassImageMapping = {
    'Shadow': 'https://picsum.photos/400/300?random=4',
    'Marauder': 'https://picsum.photos/400/300?random=1', 
    'Witch': 'https://picsum.photos/400/300?random=2',
    'Templar': 'https://picsum.photos/400/300?random=3',
    'Scion': 'https://picsum.photos/400/300?random=5',
    'Ranger': 'https://picsum.photos/400/300?random=6',
    'Duelist': 'https://picsum.photos/400/300?random=7'
  };

  private readonly fallbackImage = 'https://picsum.photos/400/300?random=99';

  getBuildImage(buildName: string, buildClass: string, customImage?: string): string {
    if (customImage) {
      return customImage;
    }

    const classImage = this.classImages[buildClass];
    if (classImage) {
      return classImage;
    }

    return this.fallbackImage;
  }

  getClassImage(className: string): string {
    return this.classImages[className] || this.fallbackImage;
  }

  preloadImage(imageUrl: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = imageUrl;
    });
  }

  optimizeImageUrl(imageUrl: string, width: number, height: number): string {
    if (imageUrl.includes('picsum.photos')) {
      const baseUrl = imageUrl.split('?')[0];
      const params = new URL(imageUrl).searchParams;
      const random = params.get('random') || Math.floor(Math.random() * 100);
      return `${baseUrl.replace(/\d+\/\d+/, `${width}/${height}`)}?random=${random}`;
    }
    
    return imageUrl;
  }
}
