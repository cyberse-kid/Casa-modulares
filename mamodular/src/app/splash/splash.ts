import { Component, Output, EventEmitter, inject, PLATFORM_ID, afterNextRender } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './splash.html',
  styleUrl: './splash.css'
})
export class Splash {

  @Output() splashDone = new EventEmitter<void>();

  private readonly platformId = inject(PLATFORM_ID);

  isVisible = false;
  isZooming = false;
  isFading  = false;

  constructor() {
    afterNextRender(() => {
      console.log('afterNextRender ejecutado');
      console.log('splashShown:', sessionStorage.getItem('splashShown'));

      if (sessionStorage.getItem('splashShown')) {
        this.splashDone.emit();
        return;
      }

      this.isVisible = true;
      console.log('isVisible:', this.isVisible);

      setTimeout(() => { this.isZooming = true; }, 500);
      setTimeout(() => { this.isFading  = true; }, 900);
      setTimeout(() => {
        this.isVisible = false;
        sessionStorage.setItem('splashShown', '1');
        this.splashDone.emit();
      }, 1500);
    });
  }
}