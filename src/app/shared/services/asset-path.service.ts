import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetPathService {
  
  /**
   * Zwraca pełną ścieżkę do pliku w folderze assets.
   * Automatycznie dodaje baseHref dla GitHub Pages.
   */
  getAssetPath(relativePath: string): string {
    // Usuń początkowy slash jeśli istnieje
    const cleanPath = relativePath.startsWith('/') ? relativePath.slice(1) : relativePath;
    
    // Pobierz baseHref z dokumentu
    const baseHref = document.querySelector('base')?.getAttribute('href') || '/';
    
    // Jeśli baseHref to tylko '/', zwróć zwykłą względną ścieżkę
    if (baseHref === '/') {
      return cleanPath;
    }
    
    // W przeciwnym wypadku dodaj baseHref
    const normalizedBaseHref = baseHref.endsWith('/') ? baseHref : baseHref + '/';
    return normalizedBaseHref + cleanPath;
  }
  
  /**
   * Zwraca pełną ścieżkę do ikony itemu.
   */
  getItemIconPath(iconPath: string): string {
    // Jeśli ścieżka jest już pełnym URL, zwróć ją bez zmian
    if (iconPath.startsWith('http://') || iconPath.startsWith('https://') || iconPath.startsWith('data:')) {
      return iconPath;
    }
    
    return this.getAssetPath(iconPath);
  }
}
