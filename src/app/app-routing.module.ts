import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'ej1', loadChildren: './pages/ej1/ej1.module#Ej1PageModule' },
  { path: 'ej2', loadChildren: './pages/ej2/ej2.module#Ej2PageModule' },
  { path: 'ej3', loadChildren: './pages/ej3/ej3.module#Ej3PageModule' },
  { path: 'ej4', loadChildren: './pages/ej4/ej4.module#Ej4PageModule' },
  { path: 'ej5', loadChildren: './pages/ej5/ej5.module#Ej5PageModule' },
  { path: 'ej6', loadChildren: './pages/ej6/ej6.module#Ej6PageModule' },
  { path: 'ej8', loadChildren: './pages/ej8/ej8.module#Ej8PageModule' },
  { path: 'ej7', loadChildren: './pages/ej7/ej7.module#Ej7PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
