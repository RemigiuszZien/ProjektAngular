import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './containers/home/home';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Header } from './shared/components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Sidebar ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('pierwszy-projekt');
}
