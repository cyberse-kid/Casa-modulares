import {
  Component, OnInit, AfterViewInit,
  signal, inject, PLATFORM_ID
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

export interface Modulo {
  id: string;
  nombre: string;
  subtitulo: string;
  metros: string;
  imagen: string;
  slogan: string;
  descripcion: string;
  dormitorios: string;
  precio: string;
  specs: { icono: string; label: string; valor: string }[];
  whatsappMsg: string;
}

@Component({
  selector: 'app-casas-piloto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './casas-piloto.html',
  styleUrl: './casas-piloto.css'
})
export class CasasPiloto implements OnInit, AfterViewInit {

  private readonly platformId = inject(PLATFORM_ID);
  private readonly doc        = inject(DOCUMENT);
  private readonly route      = inject(ActivatedRoute);

  private get isBrowser(): boolean { return isPlatformBrowser(this.platformId); }

  readonly whatsappBase = '56942262561';

  moduloActivo = signal(0);

  readonly modulos: Modulo[] = [
    {
      id: 'compact',
      nombre: 'Compact',
      subtitulo: 'Blanco Nórdico',
      metros: '28 – 38 m²',
      imagen: 'modulos/modulo1.jpeg',
      slogan: 'El futuro de la construcción',
      descripcion: 'Diseño nórdico en acabado blanco mineral. Ideal como guest house, oficina profesional o cabaña de campo. Estructura liviana de acero galvanizado con revestimiento de panel metálico tratado. Máxima eficiencia en metros cuadrados sin sacrificar confort ni estética.',
      dormitorios: '1 – 2 Dormitorios',
      precio: 'Desde UF 850',
      specs: [
        { icono: '⬛', label: 'Estructura',    valor: 'Perfil de acero galvanizado' },
        { icono: '🔲', label: 'Aislación',     valor: 'Lana mineral de alta densidad' },
        { icono: '🪵', label: 'Revestimiento', valor: 'Tratado motada y panel metálico' },
        { icono: '🪟', label: 'Ventanas',      valor: 'Termopanel aluminio negro' },
        { icono: '🏠', label: 'Distribución',  valor: 'ESTAG, comedor, cocina integrada' },
        { icono: '🚚', label: 'Instalación',   valor: 'Llave en mano en 30 días' },
      ],
      whatsappMsg: 'Hola, me interesa cotizar el Módulo Compact (28–38 m²). ¿Pueden enviarme más información?'
    },
    {
      id: 'living',
      nombre: 'Living',
      subtitulo: 'Madera Oscura',
      metros: '48 – 60 m²',
      imagen: 'modulos/modulo2.jpeg',
      slogan: 'Construimos la casa a tu medida',
      descripcion: 'Revestimiento de madera oscura tratada con techo metálico negro mate. La opción más popular de nuestra línea, perfecta para familias que buscan confort, sustentabilidad y diseño contemporáneo. Incluye 2 dormitorios, salón amplio y cocina integrada con terraza.',
      dormitorios: '2 Dormitorios',
      precio: 'Desde UF 1.350',
      specs: [
        { icono: '⬛', label: 'Estructura',    valor: 'Acero galvanizado tensile' },
        { icono: '🔲', label: 'Aislación',     valor: 'Lana mineral de alta densidad' },
        { icono: '🪵', label: 'Revestimiento', valor: 'Madera tratada y panel metálico' },
        { icono: '🪟', label: 'Ventanas',      valor: 'Termopanel aluminio negro' },
        { icono: '🏠', label: 'Distribución',  valor: '2 dorm. + estar + cocina + terraza' },
        { icono: '🚚', label: 'Instalación',   valor: 'Llave en mano en 30 días' },
      ],
      whatsappMsg: 'Hola, me interesa cotizar el Módulo Living (48–60 m²). ¿Pueden enviarme más información?'
    },
    {
      id: 'premium',
      nombre: 'Premium',
      subtitulo: 'Negro Mate',
      metros: '72 – 90 m²',
      imagen: 'modulos/modulo3.jpeg',
      slogan: 'El futuro de la construcción',
      descripcion: 'El modelo insignia de MA Modular. Acabado negro mate total con ventanales de piso a cielo que inundan de luz natural cada espacio. Incluye 2 a 3 dormitorios, salón de doble altura, cocina de diseño y terminaciones de lujo. Para quienes no transan en calidad.',
      dormitorios: '2 – 3 Dormitorios',
      precio: 'Desde UF 2.100',
      specs: [
        { icono: '⬛', label: 'Estructura',    valor: 'Perfil de acero galvanizado' },
        { icono: '🔲', label: 'Aislación',     valor: 'Lana mineral de alta densidad' },
        { icono: '🪵', label: 'Revestimiento', valor: 'Panel metálico negro mate' },
        { icono: '🪟', label: 'Ventanas',      valor: 'Termopanel aluminio negro' },
        { icono: '🏠', label: 'Distribución',  valor: '2–3 dorm. ESTAG, comedor, cocina' },
        { icono: '🚚', label: 'Instalación',   valor: 'Llave en mano en 30 días' },
      ],
      whatsappMsg: 'Hola, me interesa cotizar el Módulo Premium (72–90 m²). ¿Pueden enviarme más información?'
    }
  ];

  get moduloSeleccionado(): Modulo {
    return this.modulos[this.moduloActivo()];
  }

  readonly whatsappUrls = this.modulos.map(m =>
    `https://wa.me/56942262561?text=${encodeURIComponent(m.whatsappMsg)}`
  );

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    // Leer el fragment de la URL y hacer scroll al módulo correcto
    this.route.fragment.subscribe(fragment => {
      if (!fragment) return;
      const index = this.modulos.findIndex(m => m.id === fragment.toLowerCase());
      if (index >= 0) {
        this.moduloActivo.set(index);
        setTimeout(() => {
          const el = this.doc.getElementById(fragment);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300);
      }
    });
  }

  seleccionarModulo(index: number): void {
    this.moduloActivo.set(index);
    if (!this.isBrowser) return;
    setTimeout(() => {
      const el = this.doc.getElementById(this.modulos[index].id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
}