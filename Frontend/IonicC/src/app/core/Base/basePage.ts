// src/app/core/base/base-page.ts
import { inject, Inject, Injectable, Injector, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { EmpresaService } from 'src/app/service/empresa.service';
@Injectable()
export  class BasePage {

    private empresaService: EmpresaService;
    protected destroy$ = new Subject<void>();
    listaVistas: any[] = [];
    vistaActual: any = null;
    
    constructor(protected injector: Injector) {
        // aquí obtienes el servicio sin declararlo en el constructor de la hija
        this.empresaService = this.injector.get(EmpresaService);
        this.listaVistas = this.empresaService.ListaVistas();
        
        this.empresaService.vistaActual$.pipe(takeUntil(this.destroy$)).subscribe(vista => this.vistaActual = vista);
        this.vistaActual = this.empresaService.vistaActual$.getValue();
    }


    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

}
