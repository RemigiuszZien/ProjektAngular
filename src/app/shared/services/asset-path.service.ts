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
    
    // Jeśli to już pełny URL, zwróć bez zmian
    if (iconPath.startsWith('http://') || iconPath.startsWith('https://') || iconPath.startsWith('data:')) {
      console.log('Returning full URL:', iconPath);
      return iconPath;
    }
    
    // Jeśli ścieżka nie zawiera katalogu, dodaj domyślny prefix dla ikon itemów
    let fullPath = iconPath;
    if (!iconPath.includes('/')) {
      // Jeśli to tylko nazwa pliku, dodaj prefix icons/items/
      fullPath = `icons/items/${iconPath}`;
      console.log('Added icons/items prefix:', fullPath);
    }
    
    const result = this.getAssetPath(fullPath);
    console.log('Generated path:', result);
    console.log('Base href:', document.querySelector('base')?.getAttribute('href'));
    return result;
  }
}
