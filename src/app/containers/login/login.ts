import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner';

@Component({
  selector: 'app-login',
  imports: [CommonModule, LoadingSpinnerComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  user = this.authService.user;
  isLoading = this.authService.isLoading;
  error = this.authService.error;

  async signInWithGoogle() {
    await this.authService.signInWithGoogle();
    
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
    }
  }

  async signOut() {
    await this.authService.signOut();
  }
}
