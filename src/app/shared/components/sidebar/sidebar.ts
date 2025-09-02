import { CommonModule } from '@angular/common';
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  imports: [CommonModule, RouterModule],
  host: {
    'class.sidenav': 'true',
    '[class.sidenav-collapsed]': 'collapsed()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {
  collapsed = signal(true);
  items = signal([
    { routeLink: '/', label: 'Home', icon: '🏠' },
    { routeLink: '/buildy', label: 'Builds', icon: '⚔️' },
  ]);

  toggle(): void {
    this.collapsed.update(c => !c);
  }
}
