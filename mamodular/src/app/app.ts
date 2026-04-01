import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<router-outlet />`,
  styles: []
})
export class App implements AfterViewInit {

  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (sessionStorage.getItem('splashShown')) return;

    const styleTag = document.createElement('style');
    styleTag.textContent = `
      #ma-splash {
        position: fixed; inset: 0; z-index: 99999;
        background: #111110;
        display: flex; align-items: center; justify-content: center;
        transition: opacity 0.5s ease;
      }
      #ma-splash-inner {
        display: flex; flex-direction: column;
        align-items: center; gap: 1.25rem;
        animation: splashIn 0.5s ease forwards;
        transform-origin: center;
        transition: transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94),
                    opacity 0.5s ease 0.2s;
      }
      #ma-splash-inner img {
        width: 7rem; height: 7rem;
        object-fit: contain; border-radius: 8px;
      }
      #ma-splash-inner p {
        font-family: 'Jost', sans-serif;
        font-size: 0.7rem; letter-spacing: 0.35em;
        text-transform: uppercase;
        color: rgba(255,255,255,0.5); margin: 0;
      }
      #ma-splash-inner.zoom-out {
        transform: scale(8) translateY(-5%);
        opacity: 0;
      }
      @keyframes splashIn {
        from { opacity: 0; transform: scale(0.85); }
        to   { opacity: 1; transform: scale(1); }
      }
    `;
    document.head.appendChild(styleTag);

    const splash = document.createElement('div');
    splash.id = 'ma-splash';
    splash.innerHTML = `
      <div id="ma-splash-inner">
        <img src="logo.png" alt="MA Modular" />
        <p>Arquitectura que se siente</p>
      </div>
    `;
    document.body.appendChild(splash);

    setTimeout(() => {
      const el = document.getElementById('ma-splash-inner');
      if (el) el.classList.add('zoom-out');
    }, 500);

    setTimeout(() => {
      const s = document.getElementById('ma-splash');
      if (s) s.style.opacity = '0';
    }, 900);

    setTimeout(() => {
      const s = document.getElementById('ma-splash');
      if (s) s.remove();
      styleTag.remove();
      sessionStorage.setItem('splashShown', '1');
    }, 1500);
  }
}