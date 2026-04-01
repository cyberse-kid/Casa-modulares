import {
  Component, inject, PLATFORM_ID
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Spec { icono: string; label: string; valor: string; }
export interface Modelo {
  id: string; nombre: string; subtitulo: string;
  imagen: string; descripcion: string;
  caracteristicas: string[]; specs: Spec[]; whatsappMsg: string;
}

@Component({
  selector: 'app-casas-piloto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './casas-piloto.html',
  styleUrl: './casas-piloto.css'
})
export class CasasPiloto {

  private readonly platformId = inject(PLATFORM_ID);
  private get isBrowser(): boolean { return isPlatformBrowser(this.platformId); }

  readonly modelos: Modelo[] = [
    {
      id: 'tiny',
      nombre: 'Casa Tiny',
      subtitulo: 'Eficiencia con identidad',
      imagen: 'modulos/tiny.jpeg',
      descripcion: 'Diseño moderno y eficiente con alma propia. La Casa Tiny combina funcionalidad, sustentabilidad y estética contemporánea. Equipada con artefactos marca WASSER en baño y FDV en cocina, creando un estilo moderno y funcional.',
      caracteristicas: [
        'Diseño moderno y funcional',
        'Cocina equipada marca FDV',
        'Baño con artefactos WASSER',
        'Ampliable y transportable',
        'Aislación y ventilación premium',
        'Alto estándar de terminaciones',
      ],
      specs: [
        { icono: '🏗️', label: 'Estructura',          valor: '75mm x 75mm en 3mm acero' },
        { icono: '🌡️', label: 'Aislación',            valor: 'Lana POL. 50mm' },
        { icono: '🪵', label: 'Revestimiento muros',  valor: 'TAB. OSB EST. 11mm' },
        { icono: '🔲', label: 'Estructura piso',      valor: 'Terciado EST. 18mm' },
        { icono: '🪟', label: 'Ventanas',              valor: 'Termopanel en PVC' },
        { icono: '💡', label: 'Iluminación',           valor: 'Tipo LED' },
        { icono: '🔌', label: 'Instalación eléct.',   valor: 'Completa certificada' },
        { icono: '🛁', label: 'Baño',                  valor: 'Artefactos marca WASSER' },
        { icono: '🍳', label: 'Cocina',                valor: 'Full equipada marca FDV' },
        { icono: '🚚', label: 'Instalación',           valor: 'Llave en mano en 30 días' },
      ],
      whatsappMsg: 'Hola, me interesa cotizar la Casa Tiny de MA Modular. ¿Pueden enviarme más información?'
    },
    {
      id: 'personalizada',
      nombre: 'Casa Personalizada',
      subtitulo: 'Diseñada para tu vida',
      imagen: 'modulos/modulo3.jpeg',
      descripcion: 'Nos adaptamos completamente a tu estilo de vida, terreno y visión. Cada proyecto es único: diseñamos contigo cada espacio para que la casa refleje quién eres y cómo quieres vivir. Sin límites de metros ni distribución fija.',
      caracteristicas: [
        'Diseño 100% personalizado',
        'Adaptable a cualquier terreno',
        'Planos arquitectónicos incluidos',
        'Aislación y ventilación premium',
        'Ampliable en el tiempo',
        'Alto estándar de terminaciones',
      ],
      specs: [
        { icono: '🏗️', label: 'Estructura',           valor: 'Perfil de acero galvanizado' },
        { icono: '🌡️', label: 'Aislación',             valor: 'Lana mineral de alta densidad' },
        { icono: '🪵', label: 'Revestimiento',         valor: 'Wallpanel / Metalsiding a elección' },
        { icono: '🔲', label: 'Estructura piso',       valor: 'Terciado EST. 18mm' },
        { icono: '🪟', label: 'Ventanas',               valor: 'Termopanel aluminio negro' },
        { icono: '💡', label: 'Iluminación',            valor: 'Tipo LED integrado' },
        { icono: '🔌', label: 'Instalación eléct.',    valor: 'Completa, certificada' },
        { icono: '🚿', label: 'Instalación sanitaria', valor: 'Agua potable y alcantarillado' },
        { icono: '🛡️', label: 'Barrera térmica',       valor: 'Membrana hidrófuga' },
        { icono: '🚚', label: 'Instalación',            valor: 'Llave en mano en 30 días' },
      ],
      whatsappMsg: 'Hola, me interesa cotizar una Casa Personalizada MA Modular. ¿Pueden contactarme?'
    }
  ];

  getWhatsappUrl(m: Modelo): string {
    return `https://wa.me/56931760725?text=${encodeURIComponent(m.whatsappMsg)}`;
  }

  scrollToModelo(id: string): void {
    if (!this.isBrowser) return;
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }
}