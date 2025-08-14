import { CommonModule } from '@angular/common';
import { Component, HostBinding, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {

  @HostBinding('class.sidenav') hostSidenav = true;

  @HostBinding('class.sidenav-collapsed')
  get hostCollapsed() {
    return this.collapsed();
  }

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
