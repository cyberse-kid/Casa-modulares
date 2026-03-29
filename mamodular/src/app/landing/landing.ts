import {
  Component, OnInit, OnDestroy,
  HostListener, signal, inject, PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

interface NavLink  { label: string; id: string; }
interface StatItem { valor: string; label: string; }
interface Modelo   { nombre: string; metros: string; descripcion: string; imagen: string; tag: string; }
interface Paso     { numero: string; titulo: string; descripcion: string; }

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, OnDestroy {

  private readonly platformId = inject(PLATFORM_ID);
  private get isBrowser(): boolean { return isPlatformBrowser(this.platformId); }

  isMenuOpen    = signal(false);
  isScrolled    = signal(false);

  readonly whatsappNumber  = '56942262561';
  readonly whatsappMessage = encodeURIComponent('Hola, me interesa cotizar una casa modular. ¿Podemos hablar?');
  readonly whatsappMsgCotizar = encodeURIComponent('Hola, quiero cotizar mi proyecto de casa modular.');

  // URLs precalculadas — sin window.open, funcionan como <a href>
  readonly whatsappUrl        = `https://wa.me/56942262561?text=${encodeURIComponent('Hola, me interesa cotizar una casa modular. ¿Podemos hablar?')}`;
  readonly whatsappCotizarUrl = `https://wa.me/56942262561?text=${encodeURIComponent('Hola, quiero cotizar mi proyecto de casa modular.')}`;

  readonly navLinks: NavLink[] = [
    { label: 'Modelos',  id: 'modelos'  },
    { label: 'Proceso',  id: 'proceso'  },
    { label: 'Contacto', id: 'contacto' },
  ];

  readonly modelos: Modelo[] = [
    {
      nombre: 'Compact',
      metros: '28 – 38 m²',
      descripcion: 'Ideal para guest house, oficina o cabaña.',
      imagen: 'modulos/modulo1.jpeg',
      tag: '28 m²'
    },
    {
      nombre: 'Living',
      metros: '48 – 60 m²',
      descripcion: 'La opción más popular. Perfecta para familia.',
      imagen: 'modulos/modulo2.jpeg',
      tag: '48 m²'
    },
    {
      nombre: 'Premium',
      metros: '72 – 90 m²',
      descripcion: 'Máxima amplitud y terminaciones de lujo.',
      imagen: 'modulos/modulo3.jpeg',
      tag: '72 m²'
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
    { valor: '+50',     label: 'casas entregadas en Chile'    },
    { valor: '30 días', label: 'es nuestro plazo de entrega'  },
    { valor: '100%',    label: 'personalizable desde 28 m²'   }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isBrowser) {
      this.isScrolled.set(window.scrollY > 80);
    }
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