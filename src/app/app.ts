import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './containers/home/home';
import { Sidebar } from './shared/components/sidebar/sidebar';
import { Header } from './shared/components/header/header';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { firebaseConfig } from './shared/services/firebase-config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, Header, Sidebar ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('pierwszy-projekt');
}
