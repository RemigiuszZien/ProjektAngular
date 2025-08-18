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
    { routeLink: '/link1', label: 'link1', icon: '🏠' },
    { routeLink: '/link2', label: 'link2', icon: '📄' },
    { routeLink: '/link3', label: 'link3', icon: '📊' },
    { routeLink: '/link4', label: 'link4', icon: '⚙️' },
  ]);

  toggle(): void {
    this.collapsed.update(c => !c);
  }
}
