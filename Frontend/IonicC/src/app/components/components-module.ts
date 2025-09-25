import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { AppRoutingModule } from "src/app/app-routing.module";
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';



@NgModule({
  declarations: [MenuComponent,MainlayoutComponent,AuthLayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule
],
  exports: [MenuComponent,MainlayoutComponent,AuthLayoutComponent]
})
export class ComponentsModule { }
