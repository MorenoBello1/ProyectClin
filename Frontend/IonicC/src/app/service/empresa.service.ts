import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

export interface Vista {
  id: number;
  nombre: string;
  url: string;
  icono?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  // Observable que almacena la vista actual
  public vistaActual$ = new BehaviorSubject<Vista | null>(null);
  
  // Lista de vistas
  protected listaVistas: Vista[] = [];

  // Mapa para acceso rápido por id
  protected vistasMap = new Map<number, Vista>();

  constructor(private router: Router) {
    // Escucha cambios de ruta y actualiza la vista actual
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;

      // Intentar obtener id desde la URL (último segmento numérico)
      let id: number | null = null;
      const lastSegment = url.split('/').pop();
      if (lastSegment && !isNaN(+lastSegment)) {
        id = +lastSegment;
      }

      // Buscar la vista primero por id, si no existe, por url
      let vista: Vista | undefined;
      if (id !== null) {
        vista = this.vistasMap.get(id);
      }
      if (!vista) {
        vista = this.listaVistas.find(v => v.url === url);
      }

      // Actualizar BehaviorSubject
      this.vistaActual$.next(vista || null);
    });
  }

  // Permite que otros componentes se suscriban
  getVistaActual$() {
    return this.vistaActual$.asObservable();
  }

  // Obtener valor actual de manera inmediata
  getVistaActual(): Vista | null {
    return this.vistaActual$.getValue();
  }

  // Inicializa la lista de vistas
  // setListaVistas(vistas: Vista[]) {
  //   this.listaVistas = vistas;
  //   // Crear mapa para acceso rápido por id
  //   this.vistasMap = new Map(vistas.map(v => [v.id, v]));
  // }

  // Obtener lista de vistas
  getListaVistas(): Vista[] {
    return this.listaVistas;
  }



  setListaVistas(vistas: any[]) {
    this.listaVistas = vistas;
    this.vistasMap = new Map(vistas.map(v => [v.id, v]));

  }

  ListaVistas() {
    return this.listaVistas;
  }
}
