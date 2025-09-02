import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetPathService {
  
  getAssetPath(relativePath: string): string {
    // Usuń początkowy slash jeśli istnieje
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;

    // Pobierz baseHref z dokumentu
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    console.log('AssetPath - baseHref:', baseHref, 'cleanPath:', cleanPath);

    // Jeśli baseHref to tylko '/', zwróć zwykłą względną ścieżkę
    if (baseHref === '/') {
      console.log('AssetPath - returning local path:', cleanPath);
      return cleanPath;
    }

    // W przeciwnym wypadku utwórz pełną ścieżkę
    // Upewnij się, że baseHref kończy się slashem ale nie zaczyna podwójnym slashem
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
    
    const result = this.getAssetPath(iconPath);
    console.log('Generated path:', result);
    console.log('Base href:', document.querySelector('base')?.getAttribute('href'));
    return result;
  }
}
