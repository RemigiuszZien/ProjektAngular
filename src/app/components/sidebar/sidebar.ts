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

   collapsed = signal(false);

  items = [
    { routeLink: '/link1', label: 'link1' },
    { routeLink: '/link2', label: 'link2' },
    { routeLink: '/link3', label: 'link3' },
    { routeLink: '/link4', label: 'link4' },
  ];

  toggle(): void {
    this.collapsed.update(c => !c);
  }

  close(): void {
    this.collapsed.set(true);
  }

  open(): void {
    this.collapsed.set(false);
  }
}
