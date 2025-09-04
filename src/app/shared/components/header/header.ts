import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.user;

  async signOut() {
    await this.authService.signOut();
    this.router.navigate(['/login']);
  }
}
