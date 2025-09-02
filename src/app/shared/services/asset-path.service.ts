import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetPathService {
  
  getAssetPath(relativePath: string): string {
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';

    if (baseHref === '/') {
      return cleanPath;
    }

    let normalizedBaseHref = baseHref;
    if (!normalizedBaseHref.endsWith('/')) {
      normalizedBaseHref += '/';
    }
    
    return normalizedBaseHref + cleanPath;
  }

  getItemIconPath(iconPath: string): string {
    if (iconPath.startsWith('http://') || iconPath.startsWith('https://') || iconPath.startsWith('data:')) {
      return iconPath;
    }
    
    let fullPath = iconPath;
    if (iconPath.startsWith('/icons/')) {
      fullPath = iconPath.substring(1);
    } else if (!iconPath.includes('/')) {
      fullPath = `icons/items/${iconPath}`;
    }
    
    return this.getAssetPath(fullPath);
  }
}
