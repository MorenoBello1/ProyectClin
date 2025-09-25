import { Component, inject, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { CuentaService } from 'src/app/service/cuenta.service';
import { EmpresaService } from 'src/app/service/empresa.service';

@Component({
  selector: 'app-mainlayout',
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss'],
  standalone: false
})
export class MainlayoutComponent  implements OnInit {


  menuItems: any[] = [];
  isCollapsed = false;
  private ServiceCuenta = inject(CuentaService);
  constructor(private menuCtrl: MenuController,private empresaService:EmpresaService) { }

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
      this.empresaService.setListaVistas(this.menuItems);
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
