import { Injectable, signal } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';

export interface AuthUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  accessToken?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = getAuth(initializeApp(firebaseConfig));
  private provider = new GoogleAuthProvider();
  
  public user = signal<AuthUser | null>(null);
  public isLoading = signal(true);
  public error = signal<string | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, async (firebaseUser) => {
      this.user.set(firebaseUser ? {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        accessToken: await firebaseUser.getIdToken()
      } : null);
      this.isLoading.set(false);
    });
  }

  async signInWithGoogle(): Promise<void> {
    try {
      this.isLoading.set(true);
      this.error.set(null);
      await signInWithPopup(this.auth, this.provider);
    } catch (error: any) {
      this.error.set(error.message || 'Błąd logowania');
    } finally {
      this.isLoading.set(false);
    }
  }

  async signOut(): Promise<void> {
    try {
      await signOut(this.auth);
      this.user.set(null);
    } catch (error: any) {
      this.error.set(error.message || 'Błąd wylogowania');
    }
  }

  async getAccessToken(): Promise<string | null> {
    return this.auth.currentUser?.getIdToken() ?? null;
  }

  isAuthenticated(): boolean {
    return this.user() !== null;
  }
}
