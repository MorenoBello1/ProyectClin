import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './components/mainlayout/mainlayout.component';
import { AuthLayoutComponent } from './components/auth-layout/auth-layout.component';


const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent, // con menú
    children: [
     { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  // },

  
  // {
  //   path: '',
  //   component: AuthLayoutComponent, // sin menú
  //   children: [
  //     { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  //   ]
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
