import {
  Component, OnInit, OnDestroy,
  HostListener, signal, inject, PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Splash } from '../splash/splash';

interface NavLink  { label: string; id: string; }
interface StatItem { valor: string; label: string; }
interface Modelo   { id: string; nombre: string; subtitulo: string; metros: string; descripcion: string; imagen: string; tag: string; }
interface Paso     { numero: string; titulo: string; descripcion: string; }

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, Splash],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);
  private get isBrowser(): boolean { return isPlatformBrowser(this.platformId); }

  isMenuOpen    = signal(false);
  isScrolled    = signal(false);
  pageReady     = true;

  onSplashDone(): void { this.pageReady = true; }

  readonly whatsappUrl        = `https://wa.me/56942262561?text=${encodeURIComponent('Hola, me interesa cotizar una casa modular. ¿Podemos hablar?')}`;
  readonly whatsappCotizarUrl = `https://wa.me/56942262561?text=${encodeURIComponent('Hola, quiero cotizar mi proyecto de casa modular.')}`;

  readonly navLinks: NavLink[] = [
    { label: 'Modelos',        id: 'modelos'   },
    { label: 'Nuestra Historia', id: 'historia' },
    { label: 'Proceso',        id: 'proceso'   },
    { label: 'Contacto',       id: 'contacto'  },
  ];

  readonly modelos: Modelo[] = [
    {
      id: 'personalizada',
      nombre: 'Casa Personalizada',
      subtitulo: 'Diseñada para tu vida',
      metros: 'A medida',
      descripcion: 'Nos adaptamos completamente a tu estilo de vida, terreno y visión. Cada proyecto es único: diseñamos contigo cada espacio para que la casa refleje quién eres y cómo quieres vivir.',
      imagen: 'modulos/modulo3.jpeg',
      tag: 'A medida'
    },
    {
      id: 'tiny',
      nombre: 'Casa Tiny',
      subtitulo: 'Eficiencia con identidad',
      metros: '35 m²',
      descripcion: 'Diseño moderno y eficiente con alma propia. La Casa Tiny combina funcionalidad, sustentabilidad y estética contemporánea en un espacio compacto que no sacrifica calidad ni confort.',
      imagen: 'modulos/tiny.jpeg',
      tag: '35 m²'
    }
  ];

  readonly proceso: Paso[] = [
    { numero: '01', titulo: 'Nos contactas',    descripcion: 'Cuéntanos tu proyecto. Te asesoramos sin costo.' },
    { numero: '02', titulo: 'Diseñamos juntos', descripcion: 'Elegís modelo, tamaño y terminaciones.' },
    { numero: '03', titulo: 'Fabricamos',       descripcion: 'Construimos en taller con precisión industrial.' },
    { numero: '04', titulo: 'Te entregamos',    descripcion: 'Instalamos en tu terreno en menos de 30 días.' }
  ];

  readonly stats: StatItem[] = [
    { valor: '+50',            label: 'Módulos entregados' },
    { valor: 'Llave en mano',  label: 'Entrega completa'   },
    { valor: '30 días',        label: 'De instalación'     },
    { valor: '100%',           label: 'Personalizable'     }
  ];

  readonly statsFinales: StatItem[] = [
    { valor: '+50',     label: 'casas entregadas en Chile'   },
    { valor: '30 días', label: 'es nuestro plazo de entrega' },
    { valor: '100%',    label: 'personalizable desde 28 m²'  }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isBrowser) this.isScrolled.set(window.scrollY > 80);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  toggleMenu(): void { this.isMenuOpen.update(v => !v); }
  closeMenu(): void  { this.isMenuOpen.set(false); }

  scrollTo(sectionId: string): void {
    this.closeMenu();
    if (!this.isBrowser) return;
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}