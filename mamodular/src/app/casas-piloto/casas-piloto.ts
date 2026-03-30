import {
  Component, OnInit, AfterViewInit,
  signal, inject, PLATFORM_ID
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';

export interface Spec { label: string; valor: string; }

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

  readonly whatsappUrl = `https://wa.me/56942262561?text=${encodeURIComponent('Hola, me interesa cotizar la Tiny House Premium de 35m². ¿Pueden enviarme más información?')}`;

  readonly caracteristicas: string[] = [
    'Planos Arquitectura',
    'Aislación / Ventilación',
    'Diseño Moderno',
    'Ampliables',
    'Alto Estándar'
  ];

  readonly specsGenerales: Spec[] = [
    { label: 'Espesor del Acero',      valor: '75mm x 75mm en 3mm' },
    { label: 'Estructura Muros',       valor: 'METALCON 3\'x 4\' pul.' },
    { label: 'Aislación',              valor: 'Lana POL. 50mm' },
    { label: 'Revest. Muros',          valor: 'TAB. OSB EST. 11mm' },
    { label: 'Estructura Piso',        valor: 'Terciado EST. 18mm' },
    { label: 'Revestimiento Piso',     valor: 'Piso tipo Vinílico SPC' },
    { label: 'Barrera Térmica',        valor: 'Membrana Hidrófuga' },
    { label: 'Ventanas',               valor: 'Termopanel en PVC' },
    { label: 'Revestimiento Exterior', valor: 'Wallpanel / Metalsiding' },
    { label: 'Iluminación / Lámparas', valor: 'Tipo LED' },
  ];

  readonly colores: string[] = ['#1a1a1a', '#1e3a5f', '#6b4c2a', '#B5893A'];

  ngOnInit(): void {}
  ngAfterViewInit(): void {}
}