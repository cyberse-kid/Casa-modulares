import { Component, OnInit, OnDestroy, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements OnInit, OnDestroy {

  isMenuOpen = signal(false);
  isScrolled = signal(false);
  activeSection = signal('inicio');

  readonly whatsappNumber = '+56912345678';
  readonly whatsappMessage = 'Hola, me interesa cotizar una casa modular. ¿Podemos hablar?';

  readonly modelos = [
    {
      nombre: 'Compact',
      metros: '28 – 38 m²',
      descripcion: 'Ideal para guest house, oficina o cabaña.',
      imagen: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
      tag: '28 m²'
    },
    {
      nombre: 'Living',
      metros: '48 – 60 m²',
      descripcion: 'La opción más popular. Perfecta para familia.',
      imagen: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      tag: '48 m²'
    },
    {
      nombre: 'Premium',
      metros: '72 – 90 m²',
      descripcion: 'Máxima amplitud y terminaciones de lujo.',
      imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
      tag: '72 m²'
    }
  ];

  readonly proceso = [
    {
      numero: '01',
      titulo: 'Nos contactas',
      descripcion: 'Cuéntanos tu proyecto. Te asesoramos sin costo.'
    },
    {
      numero: '02',
      titulo: 'Diseñamos juntos',
      descripcion: 'Elegís modelo, tamaño y terminaciones.'
    },
    {
      numero: '03',
      titulo: 'Fabricamos',
      descripcion: 'Construimos en taller con precisión industrial.'
    },
    {
      numero: '04',
      titulo: 'Te entregamos',
      descripcion: 'Instalamos en tu terreno en menos de 30 días.'
    }
  ];

  readonly stats = [
    { valor: '+50', label: 'Módulos entregados' },
    { valor: 'Llave en mano', label: 'Entrega completa' },
    { valor: '30 días', label: 'De instalación' },
    { valor: '100%', label: 'Personalizable' }
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 60);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  scrollTo(sectionId: string): void {
    this.closeMenu();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openWhatsApp(): void {
    const encoded = encodeURIComponent(this.whatsappMessage);
    window.open(`https://wa.me/${this.whatsappNumber}?text=${encoded}`, '_blank');
  }

  openWhatsAppCotizar(): void {
    const msg = encodeURIComponent('Hola, quiero cotizar mi proyecto de casa modular.');
    window.open(`https://wa.me/${this.whatsappNumber}?text=${msg}`, '_blank');
  }
}