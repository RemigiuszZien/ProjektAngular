import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Header } from './shared/components/header/header';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar, BreadcrumbsComponent ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('pierwszy-projekt');
}
