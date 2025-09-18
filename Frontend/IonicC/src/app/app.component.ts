import { Component, inject } from '@angular/core';
import { CuentaService } from './service/cuenta.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  menuItems: any[] = [];
  isCollapsed = false;
  private ServiceCuenta = inject(CuentaService);
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
    this.CargarVistas();
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  } 

  async CargarVistas(){
    try {
     await  this.ServiceCuenta.getVistasCuenta().then((data) => {
      this.menuItems = data;
     })

    }catch (error) {
      console.error('Error al cargar las vistas de la cuenta:', error);
    }
  }
  
  toggle(item: any) {

    this.menuItems.forEach(i => {
      if (i !== item) {
        i.open = false;
        this.closeSubItems(i.hijos);
      }
    });

  // Alternamos el item actual
  item.open = !item.open;

 
}
cerrarMenu(){
  this.menuCtrl.close('main-menu'); 
}

// Función recursiva para cerrar sub-items
closeSubItems(items: any[]) {
  if (!items) return;
  items.forEach(i => {
    i.open = false;
    if (i.hijos?.length) {
      this.closeSubItems(i.hijos);
    }
  });
}

    
 
}
