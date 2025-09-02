import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetPathService {
  
  getAssetPath(relativePath: string): string {
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;

    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    console.log('AssetPath - baseHref:', baseHref, 'cleanPath:', cleanPath);

    if (baseHref === '/') {
      console.log('AssetPath - returning local path:', cleanPath);
      return cleanPath;
    }

    let normalizedBaseHref = baseHref;
    if (!normalizedBaseHref.endsWith('/')) {
      normalizedBaseHref += '/';
    }
    
    const result = normalizedBaseHref + cleanPath;
    console.log('AssetPath - returning GitHub path:', result);
    return result;
  }

  getItemIconPath(iconPath: string): string {
    console.log('Original iconPath:', iconPath);
    
    if (iconPath.startsWith('http://') || iconPath.startsWith('https://') || iconPath.startsWith('data:')) {
      console.log('Returning full URL:', iconPath);
      return iconPath;
    }

    let fullPath = iconPath;
    if (!iconPath.includes('/')) {
      fullPath = `icons/items/${iconPath}`;
      console.log('Added icons/items prefix:', fullPath);
    }
    
    const result = this.getAssetPath(fullPath);
    console.log('Generated path:', result);
    console.log('Base href:', document.querySelector('base')?.getAttribute('href'));
    return result;
  }
}
